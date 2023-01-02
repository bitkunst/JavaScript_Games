const playGame = (_playTools, _from, _to) => {
  const { tower1, tower2, tower3, setTower1, setTower2, setTower3 } =
    _playTools;
  tower1.sort((a, b) => b - a);
  tower2.sort((a, b) => b - a);
  tower3.sort((a, b) => b - a);
  let movingDisk;
  let temp1 = [...tower1];
  let temp2 = [...tower2];
  let temp3 = [...tower3];
  // console.log("temp1", temp1);
  if (_from === 1 && _to === 2) {
    if (temp1.length === 0) return false;
    movingDisk = temp1[temp1.length - 1];
    const checked = check(temp2, movingDisk);
    if (checked) {
      const disk = temp1.pop();
      temp2.push(disk);
      setTower1(temp1);
      setTower2(temp2);
    } else {
      alert("큰 원판은 작은 원판 위에 올 수 없습니다.");
      return false;
    }
  }

  if (_from === 1 && _to === 3) {
    if (temp1.length === 0) return false;
    movingDisk = temp1[temp1.length - 1];
    const checked = check(temp3, movingDisk);
    if (checked) {
      const disk = temp1.pop();
      temp3.push(disk);
      setTower1(temp1);
      setTower3(temp3);
    } else {
      alert("큰 원판은 작은 원판 위에 올 수 없습니다.");
      return false;
    }
  }

  if (_from === 2 && _to === 1) {
    if (temp2.length === 0) return false;
    movingDisk = temp2[temp2.length - 1];
    const checked = check(temp1, movingDisk);
    if (checked) {
      const disk = temp2.pop();
      temp1.push(disk);
      setTower2(temp2);
      setTower1(temp1);
    } else {
      alert("큰 원판은 작은 원판 위에 올 수 없습니다.");
      return false;
    }
  }

  if (_from === 2 && _to === 3) {
    if (temp2.length === 0) return false;
    movingDisk = temp2[temp2.length - 1];
    const checked = check(temp3, movingDisk);
    if (checked) {
      const disk = temp2.pop();
      temp3.push(disk);
      setTower2(temp2);
      setTower3(temp3);
    } else {
      alert("큰 원판은 작은 원판 위에 올 수 없습니다.");
      return false;
    }
  }

  if (_from === 3 && _to === 1) {
    if (temp3.length === 0) return false;
    movingDisk = temp3[temp3.length - 1];
    const checked = check(temp1, movingDisk);
    if (checked) {
      const disk = temp3.pop();
      temp1.push(disk);
      setTower3(temp3);
      setTower1(temp1);
    } else {
      alert("큰 원판은 작은 원판 위에 올 수 없습니다.");
      return false;
    }
  }

  if (_from === 3 && _to === 2) {
    if (temp3.length === 0) return false;
    movingDisk = temp3[temp3.length - 1];
    const checked = check(temp2, movingDisk);
    if (checked) {
      const disk = temp3.pop();
      temp2.push(disk);
      setTower3(temp3);
      setTower2(temp2);
    } else {
      alert("큰 원판은 작은 원판 위에 올 수 없습니다.");
      return false;
    }
  }

  return true;
};

const check = (_toArr, _disk) => {
  if (_toArr.length === 0) return true;
  else if (_toArr[_toArr.length - 1] > _disk) return true;
  else return false;
};

export default playGame;
