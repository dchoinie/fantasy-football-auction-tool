import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { NextResponse, NextRequest } from "next/server";
import { eq, sql } from "drizzle-orm";
import { rosters, teams, users } from "~/server/db/schema";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "No user found" });
  }

  try {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.clerkId, userId))
      .leftJoin(teams, eq(teams.userId, users.id))
      .leftJoin(rosters, eq(rosters.teamId, teams.id));
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json(error);
  }
}
