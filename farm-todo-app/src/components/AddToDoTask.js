import React, { useState } from "react";

const AddToDoTask = () => {
  const [agrotechnicalTreatment, setAgrotechnicalTreatment] = useState(null);
  const [typeOfTreatment, setTypeOfTreatment] = useState(null);
  const [name, setName] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const data = {
    id: 1,
    agrotechnical_treatment: agrotechnicalTreatment,
    date: null,
    details: {
      type: typeOfTreatment,
      name: name,
      quantity: quantity,
    },
  };

  return (
    <>
      <form>
        <label>
          Agrotechnical treatment:
          <select>{}</select>
        </label>
        <br />
        <label>
          Details:
          <br />
          <label>
            Type of treatment:<select></select>
          </label>
          <br />
          <label>
            Name:
            <input />
          </label>
          <br />
          <label>
            Quantity:
            <input />
            <select></select>
          </label>
          <br />
        </label>
      </form>
    </>
  );
};

export default AddToDoTask;
