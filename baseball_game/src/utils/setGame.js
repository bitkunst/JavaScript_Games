const random = () => {
  const random1 = Math.floor(Math.random() * 10);
  const random2 = Math.floor(Math.random() * 10);
  const random3 = Math.floor(Math.random() * 10);
  if (random1 !== random2 && random1 !== random3 && random2 !== random3) {
    return [random1, random2, random3];
  } else {
    return false;
  }
};

const setGame = () => {
  let result;
  while (!result) {
    result = random();
  }
  return result;
};

export default setGame;
