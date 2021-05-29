import React, { useState, useEffect } from "react";

import { FILEDS_URL } from "./constants";

import Field from './Field';
import AddBtn from './AddBtn';

const Fields = ({props}) => {
  const [fields, setFields] = useState([]);

  const {showToDoList, showAddFieldForm} = props;

  useEffect(() => {
    fetch(`${FILEDS_URL}`)
    .then((res) => res.json())
    .then((res) => setFields(res));
  }, []);

  return (
    <>
    <ul>
      {fields.map((el, i) => (
        <Field key={i} props={{el, showToDoList}} />
      ))}
    </ul>
    <AddBtn onClickHandler={showAddFieldForm} />
    </>
  );
};

export default Fields;
