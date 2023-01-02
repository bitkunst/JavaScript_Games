import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import Tower from "./Tower";

const GameBoard = () => {
  const [level, setLevel] = useState(3);
  const [count, setCount] = useState(0);
  const [tower1, setTower1] = useState([]);
  const [tower2, setTower2] = useState([]);
  const [tower3, setTower3] = useState([]);
  const towerArr = [1, 2, 3];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.level;
    const level = parseInt(value);
    if (level >= 11) {
      alert("LEVEL 10이 마지막 스테이지 입니다.");
      setLevel(10);
      e.target.level.value = 10;
      return;
    }
    setLevel(level);
  };

  useEffect(() => {
    let arr = [];
    for (let i = level; i >= 1; i--) {
      arr.push(parseInt(i));
    }
    setTower1(arr);
    setTower2([]);
    setTower3([]);
    setCount(0);
  }, [level]);

  return (
    <div>
      <h1>Game Board</h1>
      <div className="setter">
        <form onSubmit={handleSubmit}>
          <span>LEVEL : </span>
          <input type="text" placeholder="set your level" name="level" />
          <button type="submit">start</button>
        </form>
      </div>
      <h3>Minimum Trials : {2 ** level - 1}</h3>
      <div className="gameBoard">
        <Tower towerNum={1} towerArr={tower1} />
        <Tower towerNum={2} towerArr={tower2} />
        <Tower towerNum={3} towerArr={tower3} />
      </div>
      <DashBoard
        towerArr={towerArr}
        tower1={tower1}
        tower2={tower2}
        tower3={tower3}
        setTower1={setTower1}
        setTower2={setTower2}
        setTower3={setTower3}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default GameBoard;
