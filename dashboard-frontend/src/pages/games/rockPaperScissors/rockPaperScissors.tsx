import React, { useState } from "react";
import paperImg from "@images/paper.png";
import scissorsImg from "@images/scissors.png";
import rockImg from "@images/rock.png";
import { FaUser, FaRedo, FaRobot } from "react-icons/fa";

const selections = [
  { name: "paper", beats: "rock", image: paperImg },
  { name: "scissors", beats: "paper", image: scissorsImg },
  { name: "rock", beats: "scissors", image: rockImg },
];

const RockPaperScissors: React.FC = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userSelection, setUserSelection] = useState<any>(null);
  const [computerSelection, setComputerSelection] = useState<any>(null);

  const handleClick = (selectionName: string) => {
    const userSel = selections.find((s) => s.name === selectionName)!;
    const compSel = selections[Math.floor(Math.random() * selections.length)];

    setUserSelection(userSel);
    setComputerSelection(compSel);

    const userWins = userSel.beats === compSel.name;
    const compWins = compSel.beats === userSel.name;

    if (userWins) setUserScore((s) => s + 1);
    if (compWins) setComputerScore((s) => s + 1);
  };

  const handleReset = () => {
    setUserScore(0);
    setComputerScore(0);
    setUserSelection(null);
    setComputerSelection(null);
  };

  return (
    <div className="bg-gray-100 rounded-xl p-6 font-sans text-gray-800 h-full flex flex-col justify-between">
      <div className="flex justify-center gap-2 mb-2">
        {selections.map((sel) => (
          <button
            key={sel.name}
            className="p-1 hover:border-gray-400 transition-all duration-150 cursor-pointer"
            onClick={() => handleClick(sel.name)}
          >
            <img
              src={sel.image}
              alt={sel.name}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </button>
        ))}
      </div>

      <div className="flex justify-between text-md sm:text-base font-semibold mb-2 px-4 items-center gap-4">
        <span className="text-orange-500 flex items-center gap-1 text-xl">
          <FaUser className="text-orange-500" />
          بازیکن: {userScore}
        </span>

        <button
          onClick={() => handleReset()}
          title="ریست امتیازها"
          className="text-gray-500 hover:text-red-500 transition-colors text-3xl"
        >
          <FaRedo />
        </button>
        <span className="text-blue-600 flex items-center gap-1 text-xl">
          <FaRobot className="text-blue-600" />
          کامپیوتر: {computerScore}
        </span>
      </div>

      <div className="flex justify-center items-end gap-6 mt-4">
        {userSelection && (
          <div className="text-center text-xs flex flex-col items-center gap-1">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full p-1 ${
                userSelection.beats === computerSelection?.name
                  ? "border-4 border-green-400 shadow-md"
                  : "opacity-70"
              }`}
            >
              <img
                src={userSelection.image}
                alt="You"
                className="w-full h-full object-contain"
              />
            </div>
            <FaUser className="text-orange-500 text-3xl" />
          </div>
        )}

        {computerSelection && (
          <div className="text-center text-xs flex flex-col items-center gap-1">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full p-1 ${
                computerSelection.beats === userSelection?.name
                  ? "border-4 border-green-400 shadow-md"
                  : "opacity-70"
              }`}
            >
              <img
                src={computerSelection.image}
                alt="Computer"
                className="w-full h-full object-contain"
              />
            </div>
            <FaRobot className="text-blue-600 text-3xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RockPaperScissors;
