import React from 'react';
import TotalInput from "./Totalnput";

function CodeCountry(props) {

    return (
        <div>
           <TotalInput placeholder={"Code Country"} onsearch={props.onsearchCodeCountry}/>
        </div>
    );
}

export default  CodeCountry
