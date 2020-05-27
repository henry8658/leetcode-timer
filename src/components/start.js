import React from 'react'
import { Button } from '@material-ui/core';

function Start(props) {
    return (
        <Button classname="start" variant="contained" color="secondary" onClick={props.onClick}>
            Start
        </Button>
    );
}



export default Start