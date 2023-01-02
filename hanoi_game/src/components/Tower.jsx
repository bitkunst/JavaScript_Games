import React from "react";
import Disk from "./Disk";

const Tower = ({ towerNum, towerArr }) => {
  // console.log("towerArr", towerArr);
  const setDisk = () => {
    towerArr.sort((a, b) => a - b);

    return towerArr.map((v, k) => {
      return (
        <div key={k}>
          <Disk num={v} />
        </div>
      );
    });
  };

  return (
    <div className="tower">
      <div className="towerNum">TOWER {towerNum}</div>
      <div className="disk">{setDisk()}</div>
    </div>
  );
};

export default Tower;
