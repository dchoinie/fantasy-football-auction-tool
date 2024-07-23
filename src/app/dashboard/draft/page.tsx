"use client";

import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import PlayersList from "~/app/_components/PlayersList";
import { type NFLPlayer } from "~/app/_components/Player";
import TeamTracker from "~/app/_components/TeamTracker";

const Page = () => {
  const [players, setPlayers] = useState<NFLPlayer[]>([]);

  useEffect(() => {
    const csvFileUrl = "/documents/nfl_players_list.csv";
    fetch(csvFileUrl)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            console.log("parsed", result.data);
            setPlayers(result.data as NFLPlayer[]);
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching CSV file:", error); // Handle any errors that may occur during the fetch operation
      });
  }, []);

  return (
    <div className="mx-auto my-12 max-w-screen-xl">
      <div className="flex flex-col gap-24">
        <div>
          <TeamTracker />
        </div>
        {/* Players table */}
        <div>
          <PlayersList players={players} />
        </div>
      </div>
    </div>
  );
};

export default Page;
