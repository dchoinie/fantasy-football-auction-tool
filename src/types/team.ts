import { Roster } from "./roster";

export interface Team {
  id: string;
  teamName: string;
  teamMascot: string;
  totalBudget: number;
  remainingBudget: number;
  rosterSpotsTotal: number;
  rosterSpotsRemaining: number;
  roster?: Roster;
}
