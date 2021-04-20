import React from "react";
import store from "../../store/Store";
import Button from "../Display/Button/Button";

export const digitClickHandler = (num) => {
  if (!store.curExpression) {
    return (store.newExpression = num);
  }

  return (store.newExpression = `${store.curExpression}${num}`);
};

export const Digits = () => {
  return (
    <section className="buttons--digits">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((nr) => (
        <Button key={nr} text={nr} clickHandler={digitClickHandler} />
      ))}
    </section>
  );
};

export default Digits;
