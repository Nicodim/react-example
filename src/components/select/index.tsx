import React from 'react';
import {SelectProps} from "./types";
import {SelectContainer} from "./styles";

const MySelect = ({options, defaultValue, value, onChange}: SelectProps) => {
    return (
        <SelectContainer value={value} onChange={(e) => onChange(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </SelectContainer>
    );
};

export default MySelect;