import React from "react";

const Depth = ({props}) => {

    const {labelClasses, inputClasses, formClasses, selectClasses, depth, setDepth, handleChange} = props;


  return (
    <>
      <label className={`${labelClasses}`}>Details:</label>
      <label className={`${labelClasses}`}>Depth [cm]:</label>
      <input
        className={`${inputClasses}`}
        value={depth}
        onChange={(ev) => handleChange(ev, setDepth)}
        placeholder={"depth"}
      />
    </>
  );
};

export default Depth;
