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
import TotalInput from "./Totalnput";
import {useIntl} from 'react-intl';


function ShortName(props) {
    const intl = useIntl();
    return (
        <div>

            <TotalInput placeholder={
                intl.formatMessage({id: 'input.shortName'})
            } onsearch={props.onsearchShortName}/>

        </div>
    );
}

export default ShortName

