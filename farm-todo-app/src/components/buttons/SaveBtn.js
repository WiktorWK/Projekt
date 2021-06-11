import React from "react";

const SaveBtn = ({ onClickHandler }) => {

  const classes = "btn_save";

  return <button className={`${classes}`} onClick={onClickHandler}>SAVE</button>;
};

export default SaveBtn;
