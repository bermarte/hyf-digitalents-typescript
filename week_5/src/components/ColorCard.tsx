import * as React from "react";

export const ColorCard = ({ color, onClick, flash }: any) => {
  return (
    <div
      onClick={onClick}
      className={`colorCard ${color} ${flash ? "flash" : ""}`}
    ></div>
  );
};
