"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import {
  fetchProfile,
  selectProfile,
  selectProfileStatus,
} from "~/lib/features/profile/slice";

const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const profile = useAppSelector(selectProfile);
  const profileStatus = useAppSelector(selectProfileStatus);

  useEffect(() => {
    if (!profile.users.id) {
      dispatch(fetchProfile()).catch((error) => console.log(error));
    }

    if (profile.users.id && !profile.teams.id) {
      router.push("/dashboard/team/create");
    }
  }, [dispatch, profile, profile.teams.id, router]);

  return <div className="mx-auto my-12 max-w-screen-xl">Manage</div>;
};

export default Page;
