import React, { useState, useEffect } from "react";

import "./components_scss/app.scss";

import MainMenu from "./components/main_list/MainMenu";
import Fields from "./components/field_list/Fields";
import ToDoList from "./components/todo_list/ToDoList";
import AddFieldForm from "./components/forms/fields/AddFieldForm";
import AddToDoTask from "./components/forms/tasks/AddToDoTask";
import MachinesList from "./components/machines_list/MachinesList";
import AddMachiens from './components/forms/machiens/AddMachiens';

import dateActualization from "./components/functions/dateActualization";

function App() {
  const [display, setDisplay] = useState("mainmenu");

  const [fieldAdres, setFieldAdres] = useState("");

  const [date, setDate] = useState(new Date().toISOString());

  useEffect(() => {
    const interval = setInterval(() => {
      dateActualization(date, setDate);
      console.log(date);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  const showToDoList = (adres) => {
    setDisplay("todolist");
    setFieldAdres(adres);
  };

  const returnToDoList = () => {
    setDisplay("todolist");
  };

  const showFields = () => {
    setDisplay("fields");
    setFieldAdres("");
  };

  const showAddFieldForm = () => {
    setDisplay("addfield");
  };

  const showAddToDoTask = () => {
    setDisplay("addtodotask");
  };

  const showMainMenu = () => {
    setDisplay("mainmenu");
  };

  const showMachineList = () => {
    setDisplay("machineslist");
  };

  const showAddMachiens = () => {setDisplay('addmachines')};

  if (display === "mainmenu") {
    return <MainMenu props={{ showFields, showMachineList }} />;
  }
  if (display === "fields") {
    return <Fields props={{ showToDoList, showAddFieldForm, showMainMenu }} />;
  }
  if (display === "todolist") {
    return <ToDoList props={{ fieldAdres, showFields, showAddToDoTask }} />;
  }
  if (display === "addfield") {
    return <AddFieldForm props={{ showFields }} />;
  }
  if (display === "addtodotask") {
    return <AddToDoTask props={{ fieldAdres, returnToDoList }} />;
  }
  if (display === "machineslist") {
    return <MachinesList props={{ showMainMenu, showAddMachiens }} />;
  }
  if (display === "addmachines") {
    return <AddMachiens props={{ showMachineList }} />;
  }
}

export default App;
