import React, { useState, useEffect, useRef } from "react";

const Element = () => {
  const [color, setColor] = useState("black"); 
  const intervalRef = useRef(null)
 
  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${red},${green},${blue})`;
    setColor(rgbColor);
  };

  const onMouseEnterHandler = () => {
    intervalRef.current = setInterval(generateRandomColor, 500);
  };
  const onMouseLeaveHandler = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => { 
    return clearInterval(intervalRef.current);;
  }, []);

  const squareStyle = {
    backgroundColor: color,
  };

  return (
    <div
      className="elemento"
      style={squareStyle}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <h2>Elementos sesion 10,11,12</h2>
    </div>
  );
};

export default Element;
