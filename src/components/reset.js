import React from 'react'
import { Button } from '@material-ui/core';

function Reset(props) {
    return (
        <Button classname="reset" variant="contained" onClick={props.onClick}>
            Reset
        </Button>
    );
}

export default Reset