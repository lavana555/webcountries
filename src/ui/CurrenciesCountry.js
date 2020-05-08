import React from 'react';
import TotalInput from "./Totalnput";
import {useIntl} from "react-intl";

function CurrenciesCountry(props) {
    const intl = useIntl();
    return (
        <div>
            <TotalInput placeholder={
                intl.formatMessage({id: 'input.currienciesCountry'})
            } onsearch={props.onsearchCurrenciesCountry}/>
        </div>
    );
}

export default CurrenciesCountry

