import React from 'react'

export const AlertBox = ({ severity, message, setError, setSuccess }) => {
    //set timer for the flash alert
    setTimeout(()=>{
        setError(null)
        setSuccess(null)
    }, 5000)

    return (
        <div className={`alert ${severity}`}>
            <div className='alert-content'>{message}</div>
            <small className='xbutton' onClick={()=>{
                setError(null)
                setSuccess(null)
            }} >X</small>
        </div>
    )
};

