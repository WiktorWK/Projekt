import React, { useState, useEffect } from "react";

import ReturnBtn from "./../../buttons/ReturnBtn";
import SaveBtn from "./../../buttons/SaveBtn";

import Depth from "./options/Depth";
import Quantity from "./options/Quantity";

import { FILEDS_URL } from "./../../constants";

const AddToDoTask = ({ props }) => {
  const { fieldAdres, returnToDoList } = props;

  const [fieldData, setFieldData] = useState({});

  const [agrotechnicalTreatment, setAgrotechnicalTreatment] =
    useState("subsoiling");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("kg/ha");
  const [depth, setDepth] = useState('');

  const agrotechnicalTreatmentOptions = [
    "subsoiling",
    "plowing",
    "cultivation",
    "fertilization",
    "seeding",
    "spraying",
    "harvesting",
  ];

  const quantityUnitOptions = ["[kg/ha]", "[l/ha]"];

  const labelClasses = "label";
  const inputClasses = "input";
  const formClasses = "form";
  const selectClasses = "select";

  useEffect(() => {
    fetch(`${FILEDS_URL}/${fieldAdres}`)
      .then((res) => res.json())
      .then((res) => setFieldData(res))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (ev, fun) => fun(ev.target.value);

  const saveTask = () => {
    const data = {
      id: fieldData.curent.todo_list.length,
      agrotechnical_treatment: agrotechnicalTreatment,
      date: null,
      details: {
        type: null,
        name: name,
        quantity: `${quantity} ${quantityUnit}`,
        depth: depth,
      },
    };
    setFieldData((prev) => {
      return {
        ...prev,
        curent: { ...prev.curent, todo_list: [...prev.curent.todo_list, data] },
      };
    });
  };

  useEffect(() => {
    fetch(`${FILEDS_URL}/${fieldAdres}`, {
      method: "PATCH",
      body: JSON.stringify(fieldData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [fieldData]);

  return (
    <>
      <form className={`${formClasses}`}>
        <label className={`${labelClasses}`}>Agrotechnical treatment:</label>
        <select
          className={`${selectClasses}`}
          value={agrotechnicalTreatment}
          onChange={(ev) => handleChange(ev, setAgrotechnicalTreatment)}
        >
          {agrotechnicalTreatmentOptions.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
        <br />
        {agrotechnicalTreatment === "subsoiling" && (
          <Depth
            props={{
              labelClasses,
              inputClasses,
              formClasses,
              selectClasses,
              depth,
              setDepth,
              handleChange,
            }}
          />
        )}
        {agrotechnicalTreatment === "plowing" && (
          <Depth
            props={{
              labelClasses,
              inputClasses,
              formClasses,
              selectClasses,
              depth,
              setDepth,
              handleChange,
            }}
          />
        )}
        {agrotechnicalTreatment === "cultivation" && (
          <Depth
            props={{
              labelClasses,
              inputClasses,
              formClasses,
              selectClasses,
              depth,
              setDepth,
              handleChange,
            }}
          />
        )}
        {agrotechnicalTreatment === "fertilization" && (
          <Quantity
            props={{
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
            }}
          />
        )}
        {agrotechnicalTreatment === "seeding" && (
          <Quantity
            props={{
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
            }}
          />
        )}
        {agrotechnicalTreatment === "spraying" && (
          <Quantity
            props={{
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
            }}
          />
        )}
      </form>
      <ReturnBtn onClickHandler={returnToDoList} />
      <SaveBtn onClickHandler={saveTask} />
    </>
  );
};

export default AddToDoTask;
