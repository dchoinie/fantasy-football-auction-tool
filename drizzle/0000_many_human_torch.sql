CREATE TABLE IF NOT EXISTS "fantasy-football-auction-tool_nfl_players" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"position" varchar(256),
	"nfl_team" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fantasy-football-auction-tool_rosters" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fantasy-football-auction-tool_teams" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_name" varchar(256),
	"team_mascot" varchar(256),
	"total_budget" integer,
	"remaining_budget" integer,
	"roster_spots_total" integer,
	"roster_spots_remaining" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fantasy-football-auction-tool_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"email" varchar(256),
	"clerk_id" varchar(256)
);
