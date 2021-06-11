import React, { useState, useEffect } from "react";

import { FILEDS_URL } from "../constants";

import ReturnBtn from "../buttons/ReturnBtn";
import AddBtn from "../buttons/AddBtn";

const ToDoList = ({ props }) => {
  const { fieldAdres: adres, showFields, showAddToDoTask } = props;

  const [fieldAdres, setFieldAdres] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const divClasses = "div_container";
  const titleClasses = "title_todo_list";
  const listClasses = "todo_list";

  useEffect(() => {
    fetch(`${FILEDS_URL}/${adres}`)
      .then((res) => res.json())
      .then((res) => {
        setFieldAdres(res.adres);
        return res;
      })
      .then((res) => res.curent.todo_list)
      .then((res) => setToDoList(res))
      .catch((err) => console.log(`${err}`));
  }, []);

  return (
    <div className={`${divClasses}`}>
      <h1 className={`${titleClasses}`}> TO DO LIST: </h1>
      <h2 className={`${titleClasses}`}> Field: [{fieldAdres}] </h2>
      <ul className={`${listClasses}`}>
        {toDoList.map((el, i) => (
          <li key={i}>
            {el.agrotechnical_treatment} {el.date} [{el.details.name}{" "}
            {el.details.name !== "" && el.details.quantity}{" "}
            {el.details.name === "" && el.agrotechnical_treatment !== 'harvesting' ? `${el.details.depth} [cm]` : null}]
          </li>
        ))}
      </ul>
      <ReturnBtn onClickHandler={showFields} />
      <AddBtn onClickHandler={showAddToDoTask} />
    </div>
  );
};

export default ToDoList;
