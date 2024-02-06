import React from "react";
import { useMorpionContext } from "./MorpionContext";

const Score = () => {
  const { score } = useMorpionContext();

  return (
    <div>
      <p>
        Joueur 1 : {score.player1} | {score.player2} : Joueur 2
      </p>
    </div>
  );
};

export default Score;
