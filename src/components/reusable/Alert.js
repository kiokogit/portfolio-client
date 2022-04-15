import React from 'react'
import { Alert } from "@mui/material";

export const AlertBox = ({ severity, message }) => {
    return (
        <Alert variant='outlined' severity={severity} >
            {message}
        </Alert>
    )
};

