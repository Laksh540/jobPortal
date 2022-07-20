import React from 'react'
import "./Search.css";

const Search = ({ logo, placeholder, alt, value, onChange, name }) => {
    return (
        <div className='search_btn'>
            <input placeholder={placeholder}
                onChange={onChange}
                value={value ? value : ""}
                name={name}
            />
            <img src={logo} alt={alt} />
        </div>
    )
}

export default Search
