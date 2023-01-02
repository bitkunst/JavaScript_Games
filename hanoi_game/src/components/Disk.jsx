import React from "react";

const Disk = ({ num }) => {
  let sharp = "";
  for (let i = 0; i < num; i++) {
    sharp += "#";
  }

  return <span>{sharp}</span>;
};

export default Disk;
