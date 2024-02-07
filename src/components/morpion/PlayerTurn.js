import React from "react";
import { useMorpionContext } from "./MorpionContext";

const PlayerTurn = () => {
  const { player, winner, squares } = useMorpionContext();

  if (winner) {
    return (
      <div>
        <p>
          Victoire du<span> joueur {winner}</span>
        </p>
      </div>
    );
  } else if (!winner && squares.flat().every((value) => value !== 0)) {
    return (
      <div>
        <p>Match nul</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Tour du<span> joueur {player}</span>
        </p>
      </div>
    );
  }
};

export default PlayerTurn;
