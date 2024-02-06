import React from "react";
import { useMorpionContext } from "./MorpionContext";

const PlayerTurn = () => {
  const { player, winner } = useMorpionContext();

  if (!winner) {
    return (
      <div>
        <p>
          Tour du<span> joueur {player}</span>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Victoire du<span> joueur {winner}</span>
        </p>
      </div>
    );
  }
};

export default PlayerTurn;
