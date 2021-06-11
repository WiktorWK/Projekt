import React, { useState, useEffect } from "react";

const MainMenu = ({props}) => {
  
  const {showFields, showMachineList} = props;
  
    const [main, setMain] = useState(['fields', 'machines']);

  const classes = "list";


  return (
    <>
      <ul className={`${classes}`}>
        <li className={'list_el'} onClick={showFields} > fields </li>
        <li className={'list_el'} onClick={showMachineList} > machines </li>
      </ul>
    </>
  );
};

export default MainMenu;
