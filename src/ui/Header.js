// import React, {useRef, useState} from 'react';
//
// function ShortName(props) {
//     const[value,setValue]=useState('')
//    const textInput = useRef(null)
//  const   changedShortName=(textInput)=>{
// //debugger
//    //  console.log(textInput)
//         setValue(textInput.currentTarget.value)
//     }
//
//     const searchShortName=()=>{
//
//         props.onsearchShortName(value)
//     }
//
//
//     return (
//         <div>
//             <input type='text'
//             onChange={changedShortName}
//                    value={value}
//                    ref={textInput}
//                    placeholder={"Short Name Country"}
//             />
//             <button onClick={searchShortName}>search</button>
//
//         </div>
//     );
// }
//
// export default ShortName
import React from 'react';
import {AppLocale} from "./AboutCountryLocale";
import Button from "@material-ui/core/Button";
import {useStyles} from "../particlesOption";


function Header(props) {
    const classes = useStyles();

    return (
        <div className='header'>
            <div className='languge'>
                <AppLocale name={'language'} defaultMessage={'Language'}/>
            </div>
            <div className='header_btn'>
                <Button variant="contained" size="medium" color="primary" className={classes.margin}
                        onClick={props.changedLocale}>
                    en
                </Button>
                <Button variant="contained" size="medium" color="primary" className={classes.margin}
                        onClick={props.changedLocale}>
                    ru
                </Button>
            </div>

        </div>
    );
}

export default Header

