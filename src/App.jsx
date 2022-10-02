import { useState, useEffect } from 'react';

function generateHexaColor() {
  const hexaDigits = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ];

  const color = [...hexaDigits]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)
    .join('');
  return `#${color}`;
}
function App() {
  const [currentColor, setCurrentColor] = useState(() => generateHexaColor());
  const [options, setOptions] = useState(() => [
    currentColor,
    generateHexaColor(),
    generateHexaColor(),
  ]);
  const [answer, setAnswer] = useState();
  const [chosenAnswer, setChosenAnswer] = useState('');

  useEffect(() => {
    setOptions(() =>
      [currentColor, generateHexaColor(), generateHexaColor()].sort(
        () => Math.random() - 0.5
      )
    );
  }, [currentColor]);

  function handleClickedAnswer(answer) {
    setChosenAnswer(answer);
    if (answer === currentColor) {
      setCurrentColor(generateHexaColor());
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  }
  return (
    <div className="container mx-auto flex justify-center items-center]">
      <div className="pt-20">
        <div>
          <h1 className="text-center mb-6 font-bold text-xl">Color Guesser</h1>
          <div
            style={{ backgroundColor: currentColor }}
            className="w-40 h-40 mx-auto mb-4"
          ></div>
        </div>
        <div className="flex gap-2 mb-2">
          {options.map((option) => {
            return (
              <button
                key={option}
                className="rounded bg-slate-200 shadow-md p-2"
                onClick={() => handleClickedAnswer(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="text-red-500 text-center">
          {answer ? (
            ''
          ) : (
            <div className="flex items-center justify-center gap-2">
              <h1>Incorrect! Your chosen color was: </h1>
              <div
                className="w-4 h-4"
                style={{ backgroundColor: chosenAnswer }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
