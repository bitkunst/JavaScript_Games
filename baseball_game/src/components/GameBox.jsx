import React, { useEffect, useRef, useState } from "react";
import GameProgress from "./GameProgress";
import playGame from "../utils/playGame";

const GameBox = ({ answer, flag, setFlag, gameResult, setGameResult }) => {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

  const itemsRef = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInputs = [first, second, third];
    const result = playGame(answer, userInputs, itemsRef);
    setGameResult([...gameResult, result]);
    // console.log("result", result);

    setFirst("");
    setSecond("");
    setThird("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "input-1") setFirst(parseInt(value));
    if (name === "input-2") setSecond(parseInt(value));
    if (name === "input-3") setThird(parseInt(value));
  };

  const handleKeyUp = (e) => {
    const { name, maxLength } = e.target;

    if (
      name === "input-1" &&
      maxLength >= 1 &&
      e.keyCode !== 8 &&
      e.keyCode !== 13
    ) {
      itemsRef.current[1].focus();
    }
    if (
      name === "input-2" &&
      maxLength >= 1 &&
      e.keyCode !== 8 &&
      e.keyCode !== 13
    ) {
      itemsRef.current[2].focus();
    }
  };

  useEffect(() => {
    // console.log("itemsRef.current", itemsRef.current);
    itemsRef.current[0].focus();
    if (flag) {
      itemsRef.current[0].value = "";
      itemsRef.current[1].value = "";
      itemsRef.current[2].value = "";
      setFlag(false);
    }
  }, [flag, setFlag]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="GameInputs"
          name="input-1"
          ref={(el) => (itemsRef.current[0] = el)}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          maxLength={1}
        />
        <input
          className="GameInputs"
          name="input-2"
          ref={(el) => (itemsRef.current[1] = el)}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          maxLength={1}
        />
        <input
          className="GameInputs"
          name="input-3"
          ref={(el) => (itemsRef.current[2] = el)}
          onChange={handleChange}
          maxLength={1}
        />
        <button className="btn" type="submit">
          Shoot~
        </button>
      </form>
      <GameProgress gameResult={gameResult} />
    </>
  );
};

export default GameBox;
