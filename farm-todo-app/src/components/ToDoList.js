import React, { useState, useEffect } from "react";

import { FILEDS_URL } from "./constants";

import ReturnBtn from "./ReturnBtn";
import AddBtn from './AddBtn';

const ToDoList = ({ props }) => {
  const { fieldAdres: adres, showFields, showAddToDoTask } = props;

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    fetch(`${FILEDS_URL}/${adres}`)
      .then((res) => res.json())
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
      <AddBtn onClickHandler={showAddToDoTask}/>
    </>
  );
};

export default ToDoList;
