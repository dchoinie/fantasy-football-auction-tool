import { type Roster } from "./roster";
import { type Team } from "./team";
import { type User } from "./user";

export interface Profile {
  users: User;
  teams: Team;
  rosters: Roster;
}
