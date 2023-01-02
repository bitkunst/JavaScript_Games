const playGame = (_answer, _userInputs, _itemsRef) => {
  let answerFlag = [];
  let strike = 0;
  let ball = 0;

  const playData = _userInputs.reduce((acc, v, k) => {
    if (_answer.includes(v)) {
      acc.push({
        flag: true,
        userIndex: k,
        answerIndex: _answer.indexOf(v),
      });
    } else {
      acc.push({
        flag: false,
      });
    }

    return acc;
  }, answerFlag);
  console.log("_answer", _answer);
  //   console.log("_userInputs", _userInputs);
  //   console.log("playData", playData);

  for (const data of playData) {
    if (data.flag) {
      if (data.userIndex === data.answerIndex) {
        strike++;
      } else {
        ball++;
      }
    }
  }

  _itemsRef.current[0].value = "";
  _itemsRef.current[1].value = "";
  _itemsRef.current[2].value = "";
  _itemsRef.current[0].focus();

  return {
    ball,
    strike,
    userPlay: _userInputs,
  };
};

export default playGame;
