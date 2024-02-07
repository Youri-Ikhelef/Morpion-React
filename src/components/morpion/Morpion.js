import style from "./Morpion.css";
import ResetButton from "./ResetButton";
import PlayerTurn from "./PlayerTurn";
import Score from "./Score";
import Grid from "./Grid";

const Morpion = () => {
  return (
    <div className={style.morpion}>
      <Score />
      <PlayerTurn />
      <Grid />
      <ResetButton />
    </div>
  );
};

export default Morpion;
