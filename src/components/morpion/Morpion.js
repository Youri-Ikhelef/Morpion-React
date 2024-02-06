import style from "./Morpion.css";
import { useEffect } from "react";
import { useMorpionContext } from "./MorpionContext";
import ResetButton from "./ResetButton";
import PlayerTurn from "./PlayerTurn";
import Score from "./Score";

const Morpion = () => {
  const { squares, winner, handleClickSquare } = useMorpionContext();

  useEffect(() => {
    if (winner) {
      console.log(`le joueur ${winner} a gagné`);
    } else if (squares.flat().every((value) => value !== 0)) {
      console.log(`match nul`);
    }
    //eslint-disable-next-line
  }, [squares]);

  return (
    <div className={style.morpion}>
      <Score />
      <PlayerTurn />
      {squares.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((square, colIndex) => (
            <div
              key={colIndex}
              className="square"
              onClick={() => handleClickSquare(rowIndex, colIndex)}
            >
              {square === 1 ? "X" : square === 2 ? "O" : ""}
            </div>
          ))}
        </div>
      ))}
      <ResetButton />
    </div>
  );
};

export default Morpion;
