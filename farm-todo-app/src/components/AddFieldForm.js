import React, { useState } from "react";

import { FILEDS_URL } from "./constants";

import ReturnBtn from "./ReturnBtn";
import SaveFieldBtn from "./SaveFieldBtn";

const AddFieldForm = ({ props }) => {
  const { showFields } = props;

  const [fieldName, setFieldName] = useState("");

  const [fieldAdres, setFieldAdres] = useState("");

  const handleChange = (ev, fun) => fun(ev.target.value);

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
    setFieldAdres('');
    setFieldName('');
  };

  return (
    <>
      <form>
        <label>
          Field name:
          <input
            value={fieldName}
            onChange={(ev) => handleChange(ev, setFieldName)}
            placeholder={'name'}
            />
        </label>
        <br />
        <label>
          Field adres:
          <input
            value={fieldAdres}
            onChange={(ev) => handleChange(ev, setFieldAdres)}
            placeholder={'000000_00.0000.00/00'}
          />
        </label>
      </form>
      <SaveFieldBtn onClickHandler={addField} />
      <ReturnBtn onClickHandler={showFields} />
    </>
  );
};

export default AddFieldForm;
