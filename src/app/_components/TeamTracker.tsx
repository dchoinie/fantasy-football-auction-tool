import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const TeamTracker = (): JSX.Element => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Owner</TableHead>
          <TableHead>Starting Budget</TableHead>
          <TableHead>Spent</TableHead>
          <TableHead>Remaining</TableHead>
          <TableHead>Players Drafted</TableHead>
          <TableHead>Players Remaining</TableHead>
          <TableHead>Max Bid</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
    </Table>
  );
};

export default TeamTracker;
