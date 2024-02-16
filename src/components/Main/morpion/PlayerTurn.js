import React, { useEffect, useState } from "react";
import { useMorpionContext } from "./MorpionContext";
import "./PlayerTurn.css";

const PlayerTurn = () => {
  const { player, winner, squares } = useMorpionContext();
  const [playerStyle, setPlayerStyle] = useState("");

  useEffect(() => {
    if (winner) {
      setPlayerStyle(winner === 1 ? "color1" : "color2");
    } else {
      setPlayerStyle(player === 1 ? "color1" : "color2");
    }
  }, [winner, player]);

  if (winner) {
    return (
      <div className="zone_turn_winner russo">
        <p>
          Victoire du<span className={playerStyle}> joueur {winner}</span>
        </p>
      </div>
    );
  } else if (!winner && squares.flat().every((value) => value !== 0)) {
    return (
      <div className="zone_turn_winner russo">
        <p>Match nul</p>
      </div>
    );
  } else {
    return (
      <div className="zone_turn_winner russo">
        <p>
          Tour du<span className={playerStyle}> joueur {player}</span>
        </p>
      </div>
    );
  }
};

export default PlayerTurn;
