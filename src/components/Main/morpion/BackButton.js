import React from "react";
import { useMorpionContext } from "../../../store/MorpionContext";
import { IoReturnUpBack } from "react-icons/io5";
import "./BackButton.css";

const BackButton = () => {
  const { handleClickBack } = useMorpionContext();

  return (
    <button className="btn_back btn_back_left" onClick={handleClickBack}>
      <IoReturnUpBack />
    </button>
  );
};

export default BackButton;
