import React, { useState } from "react";

import "./App.css";
import Fields from "./components/Fields";
import ToDoList from "./components/ToDoList";
import AddFieldForm from './components/AddFieldForm';
import AddToDoTask from './components/AddToDoTask';

function App() {
  const [display, setDisplay] = useState("fields");

  const [fieldAdres, setFieldAdres] = useState("");

  const showToDoList = (adres) => {
    setDisplay("todolist");
    setFieldAdres(adres);
  };

  const showFields = () => {
    setDisplay("fields");
    setFieldAdres("");
  };

  const showAddFieldForm = () => {setDisplay('addfield')};

  if (display === "fields") {
    return <Fields props={{ showToDoList, showAddFieldForm }} />;
  }
  if (display === "todolist") {
    return <ToDoList props={{ fieldAdres, showFields }} />;
  }
  if (display === 'addfield') {
    return <AddFieldForm props={{showFields}} />;
  }
  if (display === 'addtodotask') {
    return <AddToDoTask />;
  }
}

export default App;
