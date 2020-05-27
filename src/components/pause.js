import React from 'react'
import { Button } from '@material-ui/core';

function Pause(props) {
    return (
        <Button classname="pause" variant="contained" onClick={props.onClick}>
            Pause
        </Button>
    );
}

export default Pause