import React from 'react';
import TotalInput from "./Totalnput";
import {useIntl } from 'react-intl';
function FullName(props) {
    const intl = useIntl();

    return (

        <div>
            <TotalInput placeholder={
                intl.formatMessage({ id: 'input.fullName' })

            } onsearch={props.onsearchFullName}/>
        </div>
    );
}

export default FullName

