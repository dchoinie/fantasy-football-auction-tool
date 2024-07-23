"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import {
  fetchProfile,
  selectProfile,
  selectProfileStatus,
} from "~/lib/features/profile/slice";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { FETCH_STATUS } from "~/enums/common";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);
  const profileStatus = useAppSelector(selectProfileStatus);

  useEffect(() => {
    dispatch(fetchProfile()).catch((error) => console.log(error));
  }, [dispatch]);

  const teamExists = profile.teams.id;

  return (
    <div className="mx-auto my-12 max-w-screen-xl">
      {profileStatus !== FETCH_STATUS.SUCCESS ? (
        <>
          <div className="flex flex-col">
            <Skeleton className="mb-3 h-[50px] w-[350px]" />
            <Skeleton className="mb-3 h-[20px] w-[350px]" />
            <div className="grid grid-cols-3 gap-12">
              <Skeleton className="h-[250px] w-[300px]" />
              <Skeleton className="h-[250px] w-[300px]" />
              <Skeleton className="h-[250px] w-[300px]" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <h1 className="mb-3 text-4xl font-bold text-slate-800">
              Hello {`${profile.users.firstName} ${profile.users.lastName}`} !
            </h1>
            <p className="text-slate-700">
              Welcome to the {new Date().getFullYear()} True Fliers Auction
              Draft
            </p>
            <div className="my-12 grid grid-cols-3 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {teamExists ? "Manage Team" : "Create Team"}
                  </CardTitle>
                  <CardDescription>
                    {teamExists
                      ? "Follow the link below to manage your team"
                      : "Follow the link below to create your team"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    {teamExists
                      ? "Manage your team name, mascot, ect..."
                      : "Create your team name, mascot, ect..."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link
                      href={
                        teamExists
                          ? "/dashboard/team"
                          : "/dashboard/team/create"
                      }
                    >
                      {`${teamExists ? "Manage" : "Create"} Team`}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
