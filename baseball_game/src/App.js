import { useEffect, useState } from "react";
import "./App.css";
import GameBox from "./components/GameBox";
import setGame from "./utils/setGame";

function App() {
  const [answer, setAnswer] = useState([]);
  const [flag, setFlag] = useState(false);
  const [gameResult, setGameResult] = useState([]);

  const handleClick = () => {
    const newAnswer = setGame();
    setAnswer(newAnswer);
    setFlag(true);
    setGameResult([]);
  };

  useEffect(() => {
    const initialAnswer = setGame();
    setAnswer(initialAnswer);
  }, []);

  return (
    <div className="App">
      <h1>THE BASEBALL GAME</h1>
      <div className="desc">
        <span>you can use number 0~9</span>
        <button onClick={handleClick}>new game</button>
      </div>
      <GameBox
        answer={answer}
        flag={flag}
        setFlag={setFlag}
        gameResult={gameResult}
        setGameResult={setGameResult}
      />
    </div>
  );
}

export default App;
