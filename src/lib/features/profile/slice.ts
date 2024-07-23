import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FETCH_STATUS } from "../../../enums/common";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type User } from "~/types/user";
import { type Team } from "~/types/team";
import { type Roster } from "~/types/roster";
import { type Profile } from "~/types/profile";

const initialState = {
  profile: {
    users: {} as User,
    teams: {} as Team,
    rosters: {} as Roster,
  },
  ui: {
    fetchProfileStatus: FETCH_STATUS.IDLE,
  },
};

// Define the async thunk
export const fetchProfile = createAsyncThunk("profile", async () => {
  const res = await fetch("/api/profile");
  return (await res.json()) as Profile;
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // Define other synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.ui.fetchProfileStatus = FETCH_STATUS.IN_PROGRESS;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.ui.fetchProfileStatus = FETCH_STATUS.FAILED;
      })
      .addCase(
        fetchProfile.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.ui.fetchProfileStatus = FETCH_STATUS.SUCCESS;
          state.profile = action.payload;
        },
      );
  },
  selectors: {
    selectProfile: (state) => state.profile,
    selectProfileStatus: (state): FETCH_STATUS => state.ui.fetchProfileStatus,
  },
});

export const { selectProfile, selectProfileStatus } = profileSlice.selectors;
export default profileSlice.reducer;
