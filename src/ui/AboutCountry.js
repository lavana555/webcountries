import React from 'react';
import {AboutCountryLocale} from "./AboutCountryLocale";



export default function   AboutCountry  (props)  {





  let  rows=[
        {name:'name',defaultMessage:'Country'},
        {name:'capital',defaultMessage:'Capital'},
        {name:'region',defaultMessage:'Region'},
        {name:'subregion',defaultMessage:'Subregion'},
        {name:'population',defaultMessage:'Population'},
        {name:'topLevelDomain',defaultMessage:'Top level domain'},
        {name:'alpha2Code',defaultMessage:'Alpha2Code'},
        {name:'alpha3Code',defaultMessage:'Alpha3Code'},
        {name:'languages',defaultMessage:'Languages',object:true},
        {name:'borders',defaultMessage:'Borders'},
        {name:'timezones',defaultMessage:'Timezones'},
        {name:'nativeName',defaultMessage:'Native name'},
        {name:'numericCode',defaultMessage:'Numeric code country'},
        {name:'flag',defaultMessage:'Subregion',img:true},
    ]

   let tablesEL=rows.map(r=>  <AboutCountryLocale  name={r.name}
                                                  defaultMessage={r.defaultMessage}
                                                  dataCountry={props.dataCountry}
                                                  object={r.object}
                                                  img={r.img}

   />)

    return (
        <div>
            {tablesEL}
        </div>
    )
}


