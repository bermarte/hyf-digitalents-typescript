import "./App.scss";
import { useState, useEffect } from "react";
import { ColorCard } from "./components/ColorCard";
import timeout from "./utils/util";

function App(): JSX.Element | null {
  const [isOn, setIsOn] = useState<boolean>(false);

  const colorList: string[] = ["green", "red", "yellow", "blue"];

  const initPlay: {
    isDisplay: boolean;
    colors: string[];
    score: number;
    userPlay: boolean;
    userColors: string[];
  } = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };

  const [play, setPlay] = useState<typeof initPlay>(initPlay);
  const [flashColor, setFlashColor] = useState<string>("");

  function startHandle(): void {
    setIsOn(true);
  }

  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisplay: true });
    } else {
      setPlay(initPlay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn]);

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor: string = colorList[Math.floor(Math.random() * 4)];
      const copyColors: string[] = [...play.colors];
      copyColors.push(newColor);
      setPlay({ ...play, colors: copyColors });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn, play.isDisplay]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn, play.isDisplay, play.colors.length]);

  async function displayColors(): Promise<void> {
    await timeout(1000);
    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(1000);
      setFlashColor("");
      await timeout(1000);
      if (i === play.colors.length - 1) {
        const copyColors: string[] = [...play.colors];

        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse(),
        });
      }
    }
  }

  async function cardClickHandle(color: string): Promise<void> {
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors: string[] = [...play.userColors];
      const lastColor: string | undefined = copyUserColors.pop();
      setFlashColor(color);

      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({ ...play, userColors: copyUserColors });
        } else {
          await timeout(1000);
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          });
        }
      } else {
        await timeout(1000);
        setPlay({ ...initPlay, score: play.colors.length });
      }
      await timeout(1000);
      setFlashColor("");
    }
  }
  function closeHandle(): void {
    setIsOn(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="cardWrapper">
          {colorList &&
            colorList.map((item, index) => (
              <ColorCard
                key={item}
                color={item}
                onClick={() => cardClickHandle(item)}
                flash={flashColor === item}
              />
            ))}
        </div>
        {/* lost */}
        {isOn && !play.isDisplay && !play.userPlay && play.score && (
          <div className="lost">
            <div>Final Score: {play.score - 1} </div>
            <div className="startAgain" onClick={closeHandle}>
              Start Again
            </div>
          </div>
        )}
        {!isOn && !play.score && (
          <div onClick={startHandle} className="startButton">
            Start
          </div>
        )}
        {isOn && (play.isDisplay || play.userPlay) && (
          <div className="score">{play.score + 1}</div>
        )}
      </header>
    </div>
  );
}

export default App;
