import React, { useState } from 'react'
import JSONData from './MOCK_DATA.json';

const SearchApp = () => {
    const [serachterm, setSearchterm] = useState('');

    return (
        <div className="SearchApp">
            <input className="serachinput" type="text" placeholder="Search..." onChange={(e) => { setSearchterm(e.target.value) }} />
            {JSONData.filter((val) => {
                if (serachterm === '') {
                    return val
                } else if (val.first_name.toLowerCase().includes(serachterm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <h1>{val.first_name}</h1>
                        <p>{val.last_name}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default SearchApp
