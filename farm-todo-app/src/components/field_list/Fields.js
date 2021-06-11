import React, { useState, useEffect } from "react";

import { FILEDS_URL } from "../constants";

import Field from '../field_list/Field';
import AddBtn from '../buttons/AddBtn';
import ReturnBtn from './../buttons/ReturnBtn';

const Fields = ({props}) => {
  const [fields, setFields] = useState([]);

  const {showToDoList, showAddFieldForm, showMainMenu} = props;

  const classes = "list";

  useEffect(() => {
    fetch(`${FILEDS_URL}`)
    .then((res) => res.json())
    .then((res) => setFields(res));
  }, []);

  return (
    <>
    <ul className={`${classes}`} >
      {fields.map((el, i) => (
        <Field key={i} props={{el, showToDoList}} />
      ))}
    </ul>
    <AddBtn onClickHandler={showAddFieldForm} />
    <ReturnBtn onClickHandler={showMainMenu} />
    </>
  );
};

export default Fields;
