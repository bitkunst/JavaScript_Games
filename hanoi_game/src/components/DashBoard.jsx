import React, { useRef } from "react";
import playGame from "../utils/gameController";

const DashBoard = ({
  towerArr,
  tower1,
  tower2,
  tower3,
  setTower1,
  setTower2,
  setTower3,
  count,
  setCount,
}) => {
  const fromInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value: fromValue } = e.target.from;
    const { value: toValue } = e.target.to;
    const from = parseInt(fromValue);
    const to = parseInt(toValue);
    // console.log("diskArr", diskArr);
    if (!towerArr.includes(from) || !towerArr.includes(to)) {
      alert("올바른 타워 번호를 입력하세요");
      return;
    }
    // console.log("tools", tools);
    const playTools = {
      tower1,
      tower2,
      tower3,
      setTower1,
      setTower2,
      setTower3,
    };
    const result = playGame(playTools, from, to);

    if (result) {
      const trial = count + 1;
      setCount(trial);
    }
    e.target.from.value = "";
    e.target.to.value = "";
    fromInput.current.focus();
  };

  return (
    <div>
      <h2>Dash Board</h2>
      <h3>Your Trials : {count}</h3>
      <form onSubmit={handleSubmit}>
        <span>From : </span>
        <input name="from" ref={fromInput} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>To : </span>
        <input name="to" />
        &nbsp;&nbsp;
        <button type="submit">go</button>
      </form>
    </div>
  );
};

export default DashBoard;
