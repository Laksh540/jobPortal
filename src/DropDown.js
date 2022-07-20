import React from 'react';
import "./DropDown.css";

const DropDown = ({ name, value, placeholder, list, onChange }) => {
    return (
        <div className='dropDowm'>
            <select name={name} value={value ? value : ""}
                onChange={onChange}
                placeholder={placeholder}>
                {list.map((item, key) => (
                    <option key={key} value={item.id ? item.id : ""}>{item.title}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown
