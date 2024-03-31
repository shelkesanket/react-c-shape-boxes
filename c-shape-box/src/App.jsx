import React, { useState } from "react";

const Box = ({ index, handleClick, color }) => (
  <div
    className="box"
    style={{ backgroundColor: color }}
    onClick={() => handleClick(index)}
  />
);

const App = () => {
  const [boxColors, setBoxColors] = useState(Array(7).fill("yellow"));
  const [clickedBoxes, setClickedBoxes] = useState([]);

  const handleClick = (index) => {
    const newBoxColors = [...boxColors];
    newBoxColors[index] = "green";
    setBoxColors(newBoxColors);
    setClickedBoxes([...clickedBoxes, index]);
  };

  const revertColors = () => {
    clickedBoxes.forEach((index, i) => {
      setTimeout(() => {
        const newBoxColors = [...boxColors];
        newBoxColors[index] = "yellow";
        setBoxColors(newBoxColors);
      }, (i + 1) * 1000);
    });
    setClickedBoxes([]);
  };

  // Check if all boxes are green
  const allBoxesGreen = boxColors.every((color) => color === "green");
  if (allBoxesGreen) {
    revertColors();
  }

  return (
    <div className="container">
      <h1>Sanket</h1>
      {boxColors.map((color, index) => (
        <Box
          key={index}
          index={index}
          handleClick={handleClick}
          color={color}
        />
      ))}
    </div>
  );
};

export default App;
