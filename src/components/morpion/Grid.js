import { useMorpionContext } from "./MorpionContext";

const Grid = () => {
  const { squares, handleClickSquare } = useMorpionContext();
  return (
    <div>
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
    </div>
  );
};

export default Grid;
