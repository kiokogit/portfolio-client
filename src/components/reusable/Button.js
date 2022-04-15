import React from 'react'

export const MyButton = ({ type, label, onclick }) => {
    return (
        <button type={type} onClick={onclick}> {label} </button>
    )
};
