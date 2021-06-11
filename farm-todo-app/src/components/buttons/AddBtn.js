import React from "react";

const AddBtn = ({ onClickHandler }) => {

  const classes = "btn_add";

  return <button className={`${classes}`} onClick={onClickHandler}>+</button>;
};

export default AddBtn;
