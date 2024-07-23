import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { ScrollArea } from "~/components/ui/scroll-area";
import { type NFLPlayer } from "./Player";
import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";

interface Props {
  players: NFLPlayer[];
}

const PlayersList = ({ players }: Props) => {
  return (
    <ScrollArea className="h-[900px] w-full rounded border border-slate-100 p-3 shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Team</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player: NFLPlayer) => (
            <TableRow key={player.id} className="even:bg-slate-100">
              <TableCell>{player.firstName}</TableCell>
              <TableCell>{player.lastName}</TableCell>
              <TableCell>{player.position}</TableCell>
              <TableCell>{player.nflTeam}</TableCell>
              <TableCell>
                <Button>
                  <Plus size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default PlayersList;
