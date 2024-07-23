import React from "react";

export interface NFLPlayer {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  nflTeam: string;
  drafted: boolean;
  teamId?: number;
}

const Player = ({
  firstName,
  lastName,
  position,
  nflTeam,
  teamId,
}: NFLPlayer): JSX.Element => {
  return <div>PlayersList</div>;
};

export default Player;
