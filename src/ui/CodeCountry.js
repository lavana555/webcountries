import React from 'react';
import TotalInput from "./Totalnput";
import {useIntl} from "react-intl";

function CodeCountry(props) {
    const intl = useIntl();

    return (
        <div>
           <TotalInput placeholder={
               intl.formatMessage({ id: 'input.codeCountry' })
           } onsearch={props.onsearchCodeCountry}/>
        </div>
    );
}

export default  CodeCountry
