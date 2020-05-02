import React from 'react';
import TotalInput from "./Totalnput";
function FullName(props) {


    return (
        <div>
            <TotalInput placeholder={"Full Name Country"} onsearch={props.onsearchFullName}/>
        </div>
    );
}

export default FullName

