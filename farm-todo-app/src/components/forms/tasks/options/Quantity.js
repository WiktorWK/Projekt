import React from "react";

const Quantity = ({ props }) => {
  const {
    labelClasses,
    inputClasses,
    formClasses,
    selectClasses,
    name,
    setName,
    quantity,
    setQuantity,
    quantityUnit,
    setQuantityUnit,
    quantityUnitOptions,
    handleChange,
  } = props;

  return (
    <>
      <label className={`${labelClasses}`}>Details:</label>
      <label className={`${labelClasses}`}>Name:</label>
      <input
        className={`${inputClasses}`}
        value={name}
        onChange={(ev) => handleChange(ev, setName)}
        placeholder={"name of resources used"}
      />
      <label className={`${labelClasses}`}>Quantity:</label>
      <input
        className={`${inputClasses}`}
        value={quantity}
        onChange={(ev) => handleChange(ev, setQuantity)}
        placeholder={"dose of resources used"}
      />
      <select
        className={`${selectClasses}`}
        value={quantityUnit}
        onChange={(ev) => handleChange(ev, setQuantityUnit)}
      >
        {quantityUnitOptions.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
    </>
  );
};

export default Quantity;
