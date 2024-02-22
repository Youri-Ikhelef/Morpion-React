import React, { useEffect, useState } from "react";
import { useMorpionContext } from "../../../store/MorpionContext";
import "./PlayerTurn.css";

const PlayerTurn = () => {
  const { state } = useMorpionContext();
  const [playerStyle, setPlayerStyle] = useState("");

  useEffect(() => {
    if (state.winner) {
      setPlayerStyle(state.winner === 1 ? "color1" : "color2");
    } else {
      setPlayerStyle(state.player === 1 ? "color1" : "color2");
    }
  }, [state.winner, state.player]);

  if (state.winner) {
    return (
      <div className="zone_turn_winner russo">
        <p>
          Victoire du<span className={playerStyle}> joueur {state.winner}</span>
        </p>
      </div>
    );
  } else if (
    !state.winner &&
    state.squares.flat().every((value) => value !== 0)
  ) {
    return (
      <div className="zone_turn_winner russo">
        <p>Match nul</p>
      </div>
    );
  } else {
    return (
      <div className="zone_turn_winner russo">
        <p>
          Tour du<span className={playerStyle}> joueur {state.player}</span>
        </p>
      </div>
    );
  }
};

export default PlayerTurn;
