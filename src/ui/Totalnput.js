import React, {useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },

}));





function TotalInput(props) {
    const[value,setValue]=useState('')
    const classes = useStyles();

    const textInput = useRef(null)
    const   changedValue=(textInput)=>{

        setValue(textInput.currentTarget.value)
    }

    const onsearch=()=>{

        props.onsearch(value)
        setValue('')
    }


    return (
        <div>

            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder={props.placeholder}
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={changedValue}
                value={value}
                       ref={textInput}
                />
                <IconButton  className={classes.iconButton} aria-label="search" onClick={onsearch}>
                    <SearchIcon  />
                </IconButton>
            </Paper>

        </div>
    );
}

export default  TotalInput

