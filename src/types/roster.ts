import { type NFLPlayer } from "./nflPlayer";

export interface Roster {
  id: number;
  qb: NFLPlayer;
  rb1: NFLPlayer;
  rb2: NFLPlayer;
  wr1: NFLPlayer;
  wr2: NFLPlayer;
  te: NFLPlayer;
  flex1: NFLPlayer;
  flex2: NFLPlayer;
  bench1: NFLPlayer;
  bench2: NFLPlayer;
  bench3: NFLPlayer;
  bench4: NFLPlayer;
  bench5: NFLPlayer;
  bench6: NFLPlayer;
}
