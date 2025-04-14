import React, { useState } from 'react';
import './RangeBar.css';

const RangeBar = (props) => {

    const [value, setValue] = useState(props.value);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        props.onChange(newValue)
    };

    return (
        <div className="rangeBarContainer">
            <input
                type="range"
<<<<<<< HEAD
                min="0"
                max="255"
=======
                min="2"
                max="20"
>>>>>>> 646c1f5 (first commit)
                value={value}
                className={props.className}
                onChange={handleChange}
            />
<<<<<<< HEAD
            {/* <p>Value: {value}</p> */}
=======
            <p className='rangeValue'>Colors {value}</p>
>>>>>>> 646c1f5 (first commit)
        </div>
    );
};

export default RangeBar;
