import React from 'react';
import {FormattedMessage} from "react-intl";



export const AboutCountryLocale=(props)=> {


    const value = Array.isArray(props.dataCountry[0][props.name])
        ?  <>{props.dataCountry[0][props.name].map(v => props.object ? v.name : v)}</>
        : props.dataCountry[0][props.name]

    return (
        <div className={'tablerow'}>
            <FormattedMessage id={'aboutcountry.' + props.name} defaultMessage={props.defaultMessage}/>
            {props.img
                ? <img src={props.dataCountry[0][props.name]}/>
                : <span> {value}</span>
            }
        </div>
    )
}



export const AppLocale = (props)=>  {
    return (
        <div >
            <FormattedMessage id={'app.' + props.name} defaultMessage={props.defaultMessage}/>
        </div>
    )
}




