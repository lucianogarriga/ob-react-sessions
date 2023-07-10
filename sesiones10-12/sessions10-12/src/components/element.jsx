import React, { useState, useEffect, useRef } from "react";

const Element = () => {
  // State and setState function w/ initialValue "black"
  const [color, setColor] = useState("black");
  const intervalRef = useRef(null);
  // Variable with bg color => state component (black)
  const squareStyle = {
    backgroundColor: color,
    cursor: "pointer"
  };

  // Function to generate random colors
  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red},${green},${blue})`;
    setColor(rgb);
  };

  // Handler Events
  const onMouseEnterHandler = () => {
    intervalRef.current = setInterval(generateRandomColor, 500);
  };
  const onMouseLeaveHandler = () => {
    clearInterval(intervalRef.current);
  };

  //
  useEffect(() => {
    // The Interval will clean when the component will unmount
    return clearInterval(intervalRef.current);
    // [] => the function will execute 1 time, when the component will unmount
  }, []);

  return (
    <>
      <div
        className="elemento"
        style={squareStyle}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        onDoubleClick={onMouseLeaveHandler}
      > 
      </div>
    </>
  );
};

export default Element;
