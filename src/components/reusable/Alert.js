import React from 'react'
import { Alert } from "@mui/material";

export const AlertBox = ({ severity, message }) => {
    return (
        <Alert severity={severity} >
            {message}
        </Alert>
    )
};

