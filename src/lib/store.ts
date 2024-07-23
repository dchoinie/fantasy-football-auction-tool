import { configureStore } from "@reduxjs/toolkit";
import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import profileReducer from "~/lib/features/profile/slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
