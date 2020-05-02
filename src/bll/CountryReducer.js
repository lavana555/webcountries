import {api} from "../dall/api";
import {action} from "./Action";

export const GET_COUNTRYALL = 'CountryReducer/GET_COUNTRYALL';
export const GET_SHORTNAMECOUNTRY = 'CountryReducer/GET_SHORTNAMECOUNTRY';
export const GET_FULLNAMECOUNTRY = 'CountryReducer/GET_FULLNAMECOUNTRY';
export const GET_CODECOUNTRY = 'CountryReducer/GET_CODECOUNTRY';
export const GET_CURRENCIESCOUNTRY = 'CountryReducer/GET_CURRENCIESCOUNTRY';
export const GET_ABOUTCOUNTRY = 'CountryReducer/GET_ABOUTCOUNTRY';
export const LOADING_STATUS = 'listPhotoReducer/LOADING_STATUS';
export const ERROR_MESSAGE = 'listPhotoReducer/ERROR_MESSAGE';


const initialState = {
    countryAll: [],
    shortNamecountry:[],
    fullNamecountry:[],
    codeCountry:[],
    currenciesCountry:[],
    loading: false,
    dataCountry:[],
    error:''
};
export const CountryReducer = (state = initialState, action) => {

    switch (action.type) {
        case  GET_COUNTRYALL:
            return {
                ...state,
                countryAll: action.countryAll
            };
        case   GET_SHORTNAMECOUNTRY:
            return {
                ...state,
                shortNamecountry: action.shortNamecountry,
                fullNamecountry:[],
                codeCountry:[],
                currenciesCountry:[],
                error:''
            };
        case   GET_FULLNAMECOUNTRY:
            return {
                ...state,
                dataCountry: action.fullNamecountry,
                codeCountry:[],
                currenciesCountry:[],
                shortNamecountry:[],
                error:''
            };
        case   GET_CODECOUNTRY:
            return {
                ...state,

                dataCountry: [action.codeCountry],
                currenciesCountry:[],
                shortNamecountry:[],
                fullNamecountry:[],
                error:''
            };
        case   GET_CURRENCIESCOUNTRY:
            return {
                ...state,
                dataCountry: action.currenciesCountry,
                shortNamecountry:[],
                fullNamecountry:[],
                codeCountry:[],
                error:''
            };
        case   GET_ABOUTCOUNTRY:
            return {
                ...state,
                dataCountry: action.newcountry,
                shortNamecountry:[],
                fullNamecountry:[],
                codeCountry:[],
                error:''
            };
        case LOADING_STATUS: {
            return {
                ...state,
                loading: action.loading,
            }

        }
        case ERROR_MESSAGE : {
            return {
                ...state,
                error: action.error,
            }
        }
        default:
            return state;
    }
};





export const getCountryTC = () => async (dispatch) => {

    try {
        dispatch(action.loadAC(true))
        let res = await api.getCountryALL()
        dispatch(action.getPhotoAC(res.data))
        dispatch(action.loadAC(false))
    } catch (error) {
        dispatch(action.loadAC(false))
        dispatch(action.errorAlertSuccess(error))


    }

}



export const onaboutCountryTC=(newcountry)=>(dispatch)=>{
    dispatch(action.onaboutCountryAC(newcountry))
}




export const onsearchShortNameTC = (shortName) => async (dispatch) => {

    try {
        dispatch(action.loadAC(true))
        let res = await api.getCountryShortName(shortName)
        dispatch(action.getShortNameAC(res.data))
        dispatch(action.loadAC(false))
    } catch (error) {

        dispatch(action.loadAC(false))
        dispatch(action.errorAlertSuccess(error.message))


    }
}

export const onsearchFullNameTC = (FullName) => async (dispatch) => {

    try {
        dispatch(action.loadAC(true))
        let res = await api.getCountryFullName(FullName)
        dispatch(action.getFullNameAC(res.data))
        dispatch(action.loadAC(false))
    } catch (error) {
        dispatch(action.loadAC(false))
        dispatch(action.errorAlertSuccess(error.message))


    }
}

export const onsearchCodeCountryTC = (codeCountry) => async (dispatch) => {

    try {
        dispatch(action.loadAC(true))
        let res = await api.getCountryCode(codeCountry)
        dispatch(action.getCodeCountryAC(res.data))
        dispatch(action.loadAC(false))
    } catch (error) {
        dispatch(action.loadAC(false))
        dispatch(action.errorAlertSuccess(error.message))


    }
}

export const onsearchCurrenciesCountryTC = (currencies) => async (dispatch) => {

    try {
        dispatch(action.loadAC(true))
        let res = await api.getCountryCurrency(currencies)
        dispatch(action.getCurrenciesCountryAC(res.data))
        dispatch(action.loadAC(false))
    } catch (error) {
        dispatch(action.loadAC(false))
        dispatch(action.errorAlertSuccess(error.message))
    }
}




