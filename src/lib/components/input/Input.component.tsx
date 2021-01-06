import React from 'react';

type Props = {
    type: string;
    placeholder: string;
    value: string | number | string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
    type,
    placeholder,
    value,
    onChange
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;