import {
    ERROR_MESSAGE,
    GET_ABOUTCOUNTRY,
    GET_CODECOUNTRY,
    GET_COUNTRYALL, GET_CURRENCIESCOUNTRY,
    GET_FULLNAMECOUNTRY,
    GET_SHORTNAMECOUNTRY, LOADING_STATUS
} from "./CountryReducer";

export const action= {
     getPhotoAC : (countryAll) => ({type: GET_COUNTRYALL, countryAll}),

 getShortNameAC : (shortNamecountry) => ({type: GET_SHORTNAMECOUNTRY, shortNamecountry}),

 getFullNameAC : (fullNamecountry) => ({type: GET_FULLNAMECOUNTRY, fullNamecountry}),

 getCodeCountryAC : (codeCountry) => ({type: GET_CODECOUNTRY, codeCountry}),
 onaboutCountryAC : (newcountry) => ({type: GET_ABOUTCOUNTRY, newcountry}),

 getCurrenciesCountryAC : (currenciesCountry) => ({type: GET_CURRENCIESCOUNTRY, currenciesCountry}),


loadAC : (loading) => ({type: LOADING_STATUS, loading}),

 errorAlertSuccess : (error) => ({type: ERROR_MESSAGE, error})

}
