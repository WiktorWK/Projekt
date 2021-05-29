import React, { useState, useEffect } from "react";

import ReturnBtn from "./ReturnBtn";
import SaveBtn from "./SaveBtn";

import { FILEDS_URL } from "./constants";

const AddToDoTask = ({ props }) => {
  const { fieldAdres, returnToDoList } = props;

  const [fieldData, setFieldData] = useState({});

  const [agrotechnicalTreatment, setAgrotechnicalTreatment] =
    useState("subsoiling");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("kg/ha");

  const agrotechnicalTreatmentOptions = [
    "subsoiling",
    "plowing",
    "cultivation",
    "fertilization",
    "seeding",
    "spraying",
    "harvesting",
  ];

  const quantityUnitOptions = ["kg/ha", "l/ha"];

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
      },
    };
    setFieldData((prev) => {
      return {
        ...prev,
        curent: { ...prev.curent, todo_list: [...prev.curent.todo_list, data] },
      };
    });
    console.log("🚀 ~ fieldData", fieldData.curent.todo_list);
  };

  useEffect(() => {
      fetch(`${FILEDS_URL}/${fieldAdres}`, {
        method: "PATCH",
        body: JSON.stringify(fieldData),
        headers: {
          "Content-Type": "application/json"
        }      })
  }, [fieldData]);

  return (
    <>
      <form>
        <label>
          Agrotechnical treatment:
          <select
            value={agrotechnicalTreatment}
            onChange={(ev) => handleChange(ev, setAgrotechnicalTreatment)}
          >
            {agrotechnicalTreatmentOptions.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Details:
          <br />
          <label>
            Name:
            <input value={name} onChange={(ev) => handleChange(ev, setName)} />
          </label>
          <br />
          <label>
            Quantity:
            <input
              value={quantity}
              onChange={(ev) => handleChange(ev, setQuantity)}
            />
            <select
              value={quantityUnit}
              onChange={(ev) => handleChange(ev, setQuantityUnit)}
            >
              {quantityUnitOptions.map((el, i) => (
                <option key={i}>{el}</option>
              ))}
            </select>
          </label>
          <br />
        </label>
      </form>
      <ReturnBtn onClickHandler={returnToDoList} />
      <SaveBtn onClickHandler={saveTask} />
    </>
  );
};

export default AddToDoTask;
