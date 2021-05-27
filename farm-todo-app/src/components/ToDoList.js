import React, { useState, useEffect } from "react";

import { FILEDS_URL } from "./constants";

import ReturnBtn from "./ReturnBtn";

const ToDoList = ({ props }) => {
  const { fieldAdres: adres, showFields } = props;

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    fetch(`${FILEDS_URL}`)
      .then((res) => res.json())
      .then((res) => res.find((el) => el.adres === adres))
      .then((res) => res.curent.todo_list)
      .then((res) => setToDoList(res))
      .catch((err) => console.log(`${err}`));
  }, []);

  return (
    <>
      <ul>
        {toDoList.map((el, i) => (
          <li key={i}>
            {el.agrotechnical_treatment} {el.date}
          </li>
        ))}
      </ul>
      <ReturnBtn onClickHandler={showFields} />
    </>
  );
};

export default ToDoList;
