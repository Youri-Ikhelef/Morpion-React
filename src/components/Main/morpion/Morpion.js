import style from "./Morpion.css";
import ResetButton from "./ResetButton";
import PlayerTurn from "./PlayerTurn";
import Score from "./Score";
import Grid from "./Grid";
import { useMorpionContext } from "../../../store/MorpionContext";
import BackButton from "./BackButton";

const Morpion = () => {
  const { state } = useMorpionContext();

  if (state.cpu === undefined) {
    return null;
  }

  return (
    <div className={style.morpion}>
      <BackButton />
      <Score />
      <PlayerTurn />
      <Grid />
      <ResetButton />
    </div>
  );
};

export default Morpion;
