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
import {useIntl} from "react-intl";


function Selectcountry(props) {

    const intl = useIntl();
    return (
        <div className='item'>
            <AppLocale name={'allCountries'} defaultMessage={'ALLCOUNTRIES'}/>
            <div>
                <select className="select" onChange={props.onaboutCountry}>
                    <option value="none" selected disabled hidden>
                        {intl.formatMessage({id: 'app.selectCountries'})}
                    </option>
                    {props.CodeCountries}
                </select>
            </div>
        </div>
    )
}

export default (Selectcountry)
