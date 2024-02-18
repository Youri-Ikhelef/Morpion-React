import { useMorpionContext } from "./MorpionContext";

const Grid = () => {
  const { squares, handleClickSquare } = useMorpionContext();

  return (
    <div>
      {squares.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((square, colIndex) => {
            const playerStyle =
              square === 1 ? "color1" : square === 2 ? "color2" : "";
            return (
              <div
                key={colIndex}
                className={`square ${playerStyle}`}
                onClick={() => handleClickSquare(rowIndex, colIndex)}
              >
                {square === 1 ? "X" : square === 2 ? "O" : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
