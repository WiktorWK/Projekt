import React, { useState, useEffect } from "react";

import ReturnBtn from "./../../buttons/ReturnBtn";
import SaveBtn from "./../../buttons/SaveBtn";

import { PRODUCERS_URL, MACINES_URL } from "./../../constants";

const AddMachiens = ({ props }) => {
  const { showMachineList } = props;

  const [data, setData] = useState({});
  const [producerList, setProducerList] = useState([]);
  const [selectedProducer, setSelectedProducer] = useState("");

  const [modelList, setModelList] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");

  const [newMachie, setNewMachie] = useState('');

  const labelClasses = "label";
  const inputClasses = "input";
  const formClasses = "form";
  const selectClasses = "select";


  useEffect(() => {
    fetch(`${PRODUCERS_URL}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((res) => console.log(res));
    fetch(`${PRODUCERS_URL}`)
      .then((res) => res.json())
      .then((res) => res.machines_data.producers)
      .then((res) => setProducerList(res))
      .catch((res) => console.log(res));
    fetch(`${PRODUCERS_URL}`)
      .then((res) => res.json())
      .then((res) => res.machines_data.producers[0].producer)
      .then((res) => setSelectedProducer(res))
      .catch((res) => console.log(res));
    fetch(`${PRODUCERS_URL}`)
      .then((res) => res.json())
      .then((res) => res.machines_data.producers[0].models)
      .then((res) => {setModelList(res); setSelectedModel(res[0])})
      .catch((res) => console.log(res));
  }, []);

  const handleChange = (ev, fun) => fun(ev.target.value);

  const changeModelList = (ev) => {
    setModelList(
      producerList.find((el) => el.producer === ev.target.value).models
    );
  };

  const seveMachine = () => {
    const copy = {
      id: "",
      producer: selectedProducer,
      model: selectedModel,
    };
    setNewMachie(copy);
  };
  useEffect(() => {
    fetch(`${MACINES_URL}`, {
      method: "POST",
      body: JSON.stringify(newMachie),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [newMachie]);

  return (
    <>
      <form className={`${formClasses}`}>
        <label className={`${labelClasses}`}>Producer:</label>
        <select
        className={`${selectClasses}`}
          value={selectedProducer}
          onChange={(ev) => {
            handleChange(ev, setSelectedProducer);
            changeModelList(ev);
          }}
        >
          {producerList.map((el, i) => (
            <option key={i}> {el.producer} </option>
          ))}
        </select>
        <br />
        <label className={`${labelClasses}`}>Model:</label>
        <select
        className={`${selectClasses}`}
          value={selectedModel}
          onChange={(ev) => handleChange(ev, setSelectedModel)}
        >
          {modelList.map((el, i) => (
            <option key={i}> {el} </option>
          ))}
        </select>
      </form>
      <ReturnBtn onClickHandler={showMachineList} />
      <SaveBtn onClickHandler={seveMachine} />
    </>
  );
};

export default AddMachiens;
