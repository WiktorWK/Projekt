import React, { useState } from "react";

import { FILEDS_URL } from "./../../constants";

import ReturnBtn from "./../../buttons/ReturnBtn";
import SaveBtn from "./../../buttons/SaveBtn";

const AddFieldForm = ({ props }) => {
  const { showFields } = props;

  const [fieldName, setFieldName] = useState("");

  const [fieldAdres, setFieldAdres] = useState("");

  const labelClasses = "label";
  const inputClasses = "input";
  const formClasses = "form";

  const handleChange = (ev, fun) => {
    if (fun === setFieldAdres) {
      console.log(ev.target.value.length);

      if (ev.target.value.length < 16) {
        ev.target.className = "input_red_border";
        console.log("shit");
      } else {
        ev.target.className = "input";
      }
    }
    fun(ev.target.value);
  };

  const addField = () => {
    const data = {
      id: null,
      name: `${fieldName}`,
      adres: `${fieldAdres}`,
      area: null,
      update_date: null,
      soil_class: {
        1: null,
        2: null,
        31: null,
        32: null,
        4: null,
        5: null,
        6: null,
      },
      soil_check: [
        {
          date: null,
          composition: {
            ph: null,
            nitrogen: null,
            phosphorus: null,
            potassium: null,
            magnesium: null,
            sulfur: null,
          },
        },
      ],
      history: [
        {
          plant: null,
          year: null,
          todo_list: [
            {
              id: 1,
              agrotechnical_treatment: null,
              date: null,
              details: {
                type: null,
                name: null,
                quantity: null,
              },
            },
          ],
        },
      ],
      curent: {
        plant: null,
        year: null,
        todo_list: [],
      },
      future: [
        {
          plant: null,
          year: null,
          todo_list: [
            {
              id: 1,
              agrotechnical_treatment: null,
              date: null,
              details: {
                type: null,
                name: null,
                quantity: null,
              },
            },
          ],
        },
      ],
    };

    fetch(`${FILEDS_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setFieldAdres("");
    setFieldName("");
  };

  return (
    <>
      <form className={`${formClasses}`}>
        <label className={`${labelClasses}`}>
          Field name: <span>(yours name)</span>
        </label>
        <input
          className={`${inputClasses}`}
          value={fieldName}
          onChange={(ev) => handleChange(ev, setFieldName)}
          placeholder={"name"}
        />
        <br />
        <label className={`${labelClasses}`}>
          Field adress: <span>(000000_00.0000.00/00)</span>
        </label>
        <input
          className={`${inputClasses}`}
          value={fieldAdres}
          onChange={(ev) => handleChange(ev, setFieldAdres)}
          placeholder={"000000_00.0000.00/00"}
        />
      </form>
      <ReturnBtn onClickHandler={showFields} />
      <SaveBtn onClickHandler={addField} />
    </>
  );
};

export default AddFieldForm;
