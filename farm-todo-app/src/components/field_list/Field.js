import React from "react";

const Field = ({ props }) => {
  const classes = "list_el";

  const { el: field, showToDoList } = props;

  return (
    <li className={`${classes}`} onClick={(ev) => showToDoList(field.id)}>
      {field.name} [{field.adres}] <br /> growing: {field.curent.plant}
    </li>
  );
};

export default Field;
