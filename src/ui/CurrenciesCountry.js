import React from 'react';
import TotalInput from "./Totalnput";

function CurrenciesCountry(props) {
    return (
        <div>
            <TotalInput placeholder={"Curriencies Country"} onsearch={props.onsearchCurrenciesCountry}/>
        </div>
    );
}

export default CurrenciesCountry

