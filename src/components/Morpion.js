import style from "./Morpion.css";
import { useEffect, useState } from "react";

const Morpion = () => {
  const [squares, setSquares] = useState(() => {
    return Array(3)
      .fill(null)
      .map(() => Array(3).fill(0));
  });
  const [player, setPlayer] = useState(1);
  const [score, setScore] = useState({ player1: 0, player2: 0 });

  const handleClickSquare = (row, column) => {
    console.log(`Clic sur case ${row} ${column}`);
    //Empeche de cocher une case déja coché
    if (squares[row][column] !== 0 || winCondition()) {
      return;
    }

    //Mis à jour de la valeur de la case en fonction du joueur
    const newSquare = [...squares];
    newSquare[row][column] = player;
    //Mis à jour de l'état du tableau
    setSquares(newSquare);

    const winner = winCondition();
    if (winner) {
      setScore((prevScore) => ({
        ...prevScore,
        [winner === 1 ? "player1" : "player2"]:
          prevScore[winner === 1 ? "player1" : "player2"] + 1,
      }));
    }

    //Changer de joueur pour le tour suivant
    setPlayer(player === 1 ? 2 : 1);
  };

  const winCondition = () => {
    //Vérification des lignes, colonnes et diagonales
    for (let i = 0; i < 3; i++) {
      //lignes
      if (
        squares[i][0] !== 0 &&
        squares[i][0] === squares[i][1] &&
        squares[i][0] === squares[i][2]
      ) {
        return squares[i][0];
      }
      //colonnes
      if (
        squares[0][i] !== 0 &&
        squares[0][i] === squares[1][i] &&
        squares[0][i] === squares[2][i]
      ) {
        return squares[0][i];
      }
    }
    //diagonales
    if (
      squares[0][0] !== 0 &&
      squares[0][0] === squares[1][1] &&
      squares[0][0] === squares[2][2]
    ) {
      return squares[0][0];
    }
    if (
      squares[0][2] !== 0 &&
      squares[0][2] === squares[1][1] &&
      squares[0][2] === squares[2][0]
    ) {
      return squares[0][2];
    }
    //match nul
    return 0;
  };

  useEffect(() => {
    const winner = winCondition();
    if (winner) {
      console.log(`le joueur ${winner} a gagné`);
    } else if (squares.flat().every((value) => value !== 0)) {
      console.log(`match nul`);
    }
    //eslint-disable-next-line
  }, [squares]);

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
              {square === 1 ? "X" : square === 2 ? "O" : ""}
            </div>
          ))}
        </div>
      ))}
      <div>
        <p>Score :</p>
        <p>
          Joueur 1: {score.player1} | Joueur 2: {score.player2}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Morpion;
