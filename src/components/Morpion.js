import style from "./Morpion.css";
import { useState } from "react";

const Morpion = () => {
  const [squares, setSquares] = useState(() => {
    return Array(3)
      .fill(null)
      .map(() => Array(3).fill(0));
  });
  const [player, setPlayer] = useState(1);

  const handleClickSquare = (row, column) => {
    console.log(`Clic sur case ${row} ${column}`);
    if (squares[row][column] !== 0) {
      return;
    }

    const newSquare = [...squares];
    newSquare[row][column] = player;

    setSquares(newSquare);

    setPlayer(player === 1 ? 2 : 1);
  };

  return (
    <div className={style.morpion}>
      {squares.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((square, colIndex) => (
            <div
              key={colIndex}
              className="square"
              onClick={() => handleClickSquare(rowIndex, colIndex)}
            >
              {square}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Morpion;

// const Morpion = () => {
//   const [squares] = useState(Array(3).fill(Array(3).fill(0)));

//   return (
//     <div className={style.morpion}>
//       {squares.map((col, indexCol) => (
//         <div className={`col_${indexCol}`}>
//           {col.map((square) => (
//             <div className="square" onClick={(indexCol) => handle(indexCol)}>
//               {square}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };
