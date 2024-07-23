// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  pgTableCreator,
  timestamp,
  varchar,
  date,
  integer,
  pgEnum,
  serial,
  primaryKey,
  boolean,
  real,
} from "drizzle-orm/pg-core";
import { UserRoundIcon } from "lucide-react";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `fantasy-football-auction-tool_${name}`,
);

export const users = createTable("users", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  firstName: varchar("first_name", { length: 256 }),
  lastName: varchar("last_name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  clerkId: varchar("clerk_id", { length: 256 }),
});

export const teams = createTable("teams", {
  id: serial("id").primaryKey(),
  teamName: varchar("team_name", { length: 256 }),
  teamMascot: varchar("team_mascot", { length: 256 }),
  totalBudget: integer("total_budget"),
  remainingBudget: integer("remaining_budget"),
  rosterSpotsTotal: integer("roster_spots_total"),
  rosterSpotsRemaining: integer("roster_spots_remaining"),
  userId: integer("user_id").references(() => users.id),
});

export const nflPlayers = createTable("nfl_players", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 256 }),
  lastName: varchar("last_name", { length: 256 }),
  postition: varchar("position", { length: 256 }),
  nflTeam: varchar("nfl_team", { length: 256 }),
});

export const rosters = createTable("rosters", {
  id: serial("id").primaryKey(),
  teamId: integer("team_id").references(() => teams.id),
  // qb: integer("qb_id").references(() => nflPlayers.id),
  // rb1: integer("rb1_id").references(() => nflPlayers.id),
  // rb2: integer("rb2_id").references(() => nflPlayers.id),
  // wr1: integer("wr1_id").references(() => nflPlayers.id),
  // wr2: integer("wr2_id").references(() => nflPlayers.id),
  // te: integer("te_id").references(() => nflPlayers.id),
  // flex1: integer("flex1_id").references(() => nflPlayers.id),
  // flex2: integer("flex2_id").references(() => nflPlayers.id),
  // bench1: integer("bench1_id").references(() => nflPlayers.id),
  // bench2: integer("bench2_id").references(() => nflPlayers.id),
  // bench3: integer("bench3_id").references(() => nflPlayers.id),
  // bench4: integer("bench4_id").references(() => nflPlayers.id),
  // bench5: integer("bench5_id").references(() => nflPlayers.id),
  // bench6: integer("bench6_id").references(() => nflPlayers.id),
});
