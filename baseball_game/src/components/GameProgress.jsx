import React, { useEffect, useState } from "react";

const GameProgress = ({ gameResult }) => {
  // console.log("gameResult", gameResult);
  // console.log("userPlay", userPlay);
  const [homeRun, setHomeRun] = useState(false);

  const gameProgress = () => {
    return gameResult.map((v, k) => {
      const first = v.userPlay[0];
      const second = v.userPlay[1];
      const third = v.userPlay[2];
      return (
        <div key={k} className="progress">
          <span>
            your play : &nbsp;{first !== "" ? first : "__"}{" "}
            {second !== "" ? second : "__"} {third !== "" ? third : "__"}
            &nbsp;&nbsp;&nbsp;
          </span>
          &nbsp;&nbsp;
          <span>{v.ball} Ball</span>
          &nbsp;&nbsp;
          <span>{v.strike} Strike</span>
        </div>
      );
    });
  };

  useEffect(() => {
    if (gameResult[0] === undefined) {
      setHomeRun(false);
    }

    gameResult.forEach((v) => {
      if (v.strike === 3) setHomeRun(true);
    });
  }, [gameResult]);

  return (
    <>
      {gameProgress()}
      <div>
        {homeRun ? (
          <div className="homeRun">
            <span>~ HOME RUN ~</span>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
};

export default GameProgress;
