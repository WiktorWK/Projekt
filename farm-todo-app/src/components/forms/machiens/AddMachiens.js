import React, {useState, useEffect} from 'react';

import ReturnBtn from './../../buttons/ReturnBtn';
import SaveBtn from './../../buttons/SaveBtn';

import { PRODUCERS_URL } from './../../constants';

const AddMachiens = ({props}) => {

    const [data, setData] = useState({});
    const [producerList, setProducerList] = useState([]);
    const [selectedProducer, setSelectedProducer] = useState('');

    const [modelList, setModelList] = useState([]);
    const [selectedModel, setSelectedModel] = useState('');

    useEffect(() => {
        fetch(`${PRODUCERS_URL}`)
            .then((res) => res.json())
            .then((res) => res.machines_data)
            .then((res) => setData(res))
            .catch((res) => console.log(res));
            setProducerList(data.producers);
            console.log(producerList)

    }, []);

    
    const {showMachineList} = props;

    const selectingProducer = (ev) => {
    //   setSelectedProducer(data.find(ev.target.value));
        
    }
    
    const seveMachine = () => {};

    return (
        <>
            <form>
                <label>Producer:</label>
                <select value={selectedProducer} onChange={(ev) => selectingProducer(ev)} >
                    {producerList.map((el, i) => <option key={i} > {el.producer} </option> )}
                </select>
                <br/>
                <label>Model:</label>
                <select>
                    {}
                </select>
            </form>
            <ReturnBtn onClickHandler={showMachineList} />
            <SaveBtn onClickHandler={seveMachine} />
        </>
    );
}

export default AddMachiens;
