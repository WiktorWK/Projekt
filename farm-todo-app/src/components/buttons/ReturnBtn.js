import React from "react";

const ReturnBtn = ({ onClickHandler }) => {

  const classes = "btn_return";

  return <button className={`${classes}`} onClick={onClickHandler}>BACK</button>;
};

export default ReturnBtn;
