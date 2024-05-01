import React, { ChangeEvent } from 'react';
import { InputProps } from './types';

export function FileInput({onChange, value: _value, ...otherProps}: InputProps<File>) {

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (onChange && e.target.files) {
            onChange(e.target.files[0]);
        }
    }

    return (
        <input type="file" onChange={handleChange} {...otherProps} />
    );
}