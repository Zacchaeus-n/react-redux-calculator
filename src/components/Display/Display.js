import React from "react";

export const Display = ({ clickHandler, text = 0 }) => {
  return (
    <div className="display" onClick={clickHandler ? clickHandler : null}>
      {text.toString().split(" ").reverse().join(" ")}
    </div>
  );
};

export default Display;
