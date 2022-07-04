import React from 'react'

export const AlertBox = ({ severity, message }) => {
    return (
        <div style={{width:'375px', scale:0.7}} severity={severity} >
            {message}
        </div>
    )
};

