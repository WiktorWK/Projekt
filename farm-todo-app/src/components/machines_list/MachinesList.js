import React, { useState, useEffect } from "react";

import { MACINES_URL } from "./../constants";

import ReturnBtn from "./../buttons/ReturnBtn";
import AddBtn from './../buttons/AddBtn';

const MachinesList = ({ props }) => {
  const [machines, setMachines] = useState([]);

  const { showMainMenu, showAddMachiens } = props;

  const classes = "list";

  useEffect(() => {
    fetch(`${MACINES_URL}`)
      .then((res) => res.json())
      .then((res) => setMachines(res))
      .catch((res) => console.log(res));
  }, []);

  return (
    <>
      <ul className={`${classes}`}>
        {machines.map((el, i) => (
          <li key={i} className={"list_el"}>
            {" "}
            {el.producer}: {el.model}{" "}
          </li>
        ))}
      </ul>
      <ReturnBtn onClickHandler={showMainMenu} />
      <AddBtn onClickHandler={showAddMachiens} />
    </>
  );
};

export default MachinesList;
