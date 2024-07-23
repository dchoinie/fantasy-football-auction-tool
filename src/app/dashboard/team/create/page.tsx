"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useAppSelector } from "~/lib/hooks";
import {
  selectProfile,
  selectProfileStatus,
} from "~/lib/features/profile/slice";

const formSchema = z.object({
  teamName: z.string().min(2).max(50),
  teamMascot: z.string().min(1).max(50),
  userId: z.number(),
});

const Page = (): JSX.Element => {
  const profile = useAppSelector(selectProfile);
  const profileStatus = useAppSelector(selectProfileStatus);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      teamMascot: "",
      userId: profile.users.id,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mx-auto my-12 max-w-screen-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-1/2 space-y-8"
        >
          <FormField
            control={form.control}
            name="teamName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input placeholder="Panda's" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teamMascot"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input placeholder="Awful Team" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create Team</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
