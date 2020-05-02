import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {
    getCountryTC, onaboutCountryTC,
    onsearchCodeCountryTC,
    onsearchCurrenciesCountryTC,
    onsearchFullNameTC,
    onsearchShortNameTC
} from "./bll/CountryReducer";
import ShortName from "./ui/ShortName";
import AboutCountry from "./ui/AboutCountry";
import FullName from "./ui/FullName";
import CodeCountry from "./ui/CodeCountry";
import CurrenciesCountry from "./ui/CurrenciesCountry";
import messages_ru from "./i18/ru";
import messages_en from "./i18/en";
import {IntlProvider} from "react-intl";
import {Planets} from 'react-preloaders';
import {AppLocale} from "./ui/AboutCountryLocale";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {countryAll, shortNamecountry, dataCountry, loading, error} = useSelector((store) => store.country);
    const [intiallocal, setLocal] = useState('en')
    const [message, setMessage] = useState({'ru': messages_ru, 'en': messages_en})


    useEffect(() => {
        setLocal(localStorage.getItem('locale'))
        dispatch(getCountryTC());

    }, []);

    const onsearchShortName = (shortName) => {
        dispatch(onsearchShortNameTC(shortName))
    }
    const onsearchFullName = (fullName) => {
        dispatch(onsearchFullNameTC(fullName))

    }
    const onsearchCodeCountry = (codeCountry) => {
        dispatch(onsearchCodeCountryTC(codeCountry))
    }

    const onsearchCurrenciesCountry = (currencies) => {
        dispatch(onsearchCurrenciesCountryTC(currencies))
    }

    const changedLocale = () => {
        const locale = intiallocal === 'en' ? 'ru' : 'en'

        setLocal(locale)
        localStorage.setItem('locale', locale);
    };


    const onaboutCountry = (e) => {
        let newADD = (countryAll.filter(dataItems => {
            if (dataItems.name === e.target.value)
                return dataItems
        }))
        dispatch(onaboutCountryTC(newADD))
    }

    const shortNamecountryEL = shortNamecountry.map(el => <option key={el.id}>   {el.name}    </option>);

    const CodeCountries = countryAll.map(el => <option key={el.id}>  {el.name} </option>);
    return (
        <div className="App">
            <IntlProvider locale={intiallocal} messages={message[intiallocal]}>
                <div className={'header'}>
                    <AppLocale name={'language'} defaultMessage={'Language'}/>
                    <div>

                        <Button variant="contained" size="medium" color="primary" className={classes.margin} onClick={changedLocale}>
                        en
                    </Button>
                        <Button variant="contained" size="medium" color="primary" className={classes.margin} onClick={changedLocale} onClick={changedLocale}>
                            ru
                        </Button>
                        {/*<button onClick={changedLocale}>en</button>*/}
                        {/*<button onClick={changedLocale}>ru</button>*/}
                    </div>
                </div>
                {loading ?
                    <Planets animation="slide-down" background="#bff2bf"/>
                    : null}
                {error ? <div style={{color: "red"}}>{error}</div> : null}
                <section className={'about'}>
                    <div className='container'>
                        <div className='items'>
                            <div className='item'>
                                <AppLocale name={'shortName'} defaultMessage={'SHORT NAME COUNTRY'}/>
                                <ShortName onsearchShortName={onsearchShortName}/>
                            </div>
                            <div className='item'>
                                {shortNamecountry.length != 0 &&
                                <div>
                                    <select className="select" onChange={onaboutCountry}>
                                        {shortNamecountryEL}
                                    </select>
                                </div>
                                }
                            </div>
                            <div className='item'>
                                <AppLocale name={'fullName'} defaultMessage={'FULL NAME COUNTRY'}/>
                                <div>
                                    <FullName onsearchFullName={onsearchFullName}/>
                                </div>
                            </div>
                            <div className='item'>
                                <AppLocale name={'codeCountry'} defaultMessage={'CODE COUNTRY'}/>
                                <div>
                                    <CodeCountry onsearchCodeCountry={onsearchCodeCountry}/>
                                </div>
                            </div>
                            <div className='item'>
                                <AppLocale name={'currienciesCountry'} defaultMessage={'CURRIENCIES COUNTRY'}/>
                                <div>
                                    <CurrenciesCountry onsearchCurrenciesCountry={onsearchCurrenciesCountry}/>
                                </div>
                            </div>
                            <div className='item'>
                                <AppLocale name={'allCountries'} defaultMessage={'ALLCOUNTRIES'}/>
                                <div>
                                    <select className="select" onChange={onaboutCountry}>
                                        {CodeCountries}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='AboutCountry'>
                            {dataCountry.length != 0 &&
                            <AboutCountry dataCountry={dataCountry}/>
                            }
                        </div>
                    </div>
                </section>
            </IntlProvider>
        </div>
    );
}
export default (App);


