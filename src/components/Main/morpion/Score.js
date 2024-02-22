import React from "react";
import { useMorpionContext } from "../../../store/MorpionContext";
import "./Score.css";

const Score = () => {
  const { state } = useMorpionContext();

  return (
    <div className="zone_score">
      <span className="color1 russo">Joueur 1 </span>
      <span className="russo"> : {state.score.player1} </span> |{" "}
      <span className="russo"> {state.score.player2} : </span>
      <span className="color2 russo"> Joueur 2</span>
    </div>
  );
};

export default Score;
