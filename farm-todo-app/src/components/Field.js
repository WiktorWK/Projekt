import React from 'react';

import './../components_scss/field.scss';

const Field = ({ props }) => {

    const classes = 'list_el';

    const {el: field, showToDoList} = props;

    return (
        <li className={`${classes}`} onClick={(ev) => showToDoList(field.adres)} >
            {field.name} [{field.adres}] growing: {field.curent.plant}
        </li>
    );
}

export default Field;
