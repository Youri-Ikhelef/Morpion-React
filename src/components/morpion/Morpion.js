import style from "./Morpion.css";
import ResetButton from "./ResetButton";
import PlayerTurn from "./PlayerTurn";
import Score from "./Score";
import Grid from "./Grid";
import { useMorpionContext } from "./MorpionContext";
import BackButton from "./BackButton";

const Morpion = () => {
  const { cpu } = useMorpionContext();

  if (cpu === undefined) {
    return null;
  }

  return (
    <div className={style.morpion}>
      <Score />
      <PlayerTurn />
      <Grid />
      <ResetButton />
      <BackButton />
    </div>
  );
};

export default Morpion;
