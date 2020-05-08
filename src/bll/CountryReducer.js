import {api} from "../dall/api";
import {action} from "./Action";

export const GET_COUNTRYALL = 'CountryReducer/GET_COUNTRYALL';
export const GET_SHORTNAMECOUNTRY = 'CountryReducer/GET_SHORTNAMECOUNTRY';
export const GET_FULLNAMECOUNTRY = 'CountryReducer/GET_FULLNAMECOUNTRY';
export const GET_CODECOUNTRY = 'CountryReducer/GET_CODECOUNTRY';
export const GET_CURRENCIESCOUNTRY = 'CountryReducer/GET_CURRENCIESCOUNTRY';
export const GET_ABOUTCOUNTRY = 'CountryReducer/GET_ABOUTCOUNTRY';
export const LOADING_STATUS = 'CountryReducer/LOADING_STATUS';
export const ERROR_MESSAGE = 'CountryReducer/ERROR_MESSAGE';


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
                dataCountry: [],
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
                dataCountry: [],
                shortNamecountry:[],
                fullNamecountry:[],
                codeCountry:[],
            }
        }
        default:
            return state;
    }
};

const tryCatch = async (act, dispatch) => {
    try {
        dispatch(action.loadAC(true))
        await act();
    } catch (error) {
        dispatch(action.errorAlertSuccess(error.message))
    } finally {
        dispatch(action.loadAC(false))
    }
}



export  const  getCountryTC=()=>(dispatch)=>{
    tryCatch(async ()=>{
        let data = await api.getCountryALL()
        dispatch(action.getPhotoAC(data))
    },dispatch)
}

export const onsearchShortNameTC = (shortName) => async (dispatch) => {
    tryCatch(async ()=>{
        let data = await api.getCountryShortName(shortName)
        dispatch(action.getShortNameAC(data))
    },dispatch)
}


export const onsearchFullNameTC = (FullName) => async (dispatch) => {
    tryCatch(async ()=>{
        let data = await api.getCountryFullName(FullName)
        dispatch(action.getFullNameAC(data))
    },dispatch)

}


export const onsearchCodeCountryTC = (codeCountry) => async (dispatch) => {

    tryCatch(async ()=>{
        let data = await api.getCountryCode(codeCountry)
        dispatch(action.getCodeCountryAC(data))
    },dispatch)


}



export const onsearchCurrenciesCountryTC = (currencies) => async (dispatch) => {

    tryCatch(async ()=>{
        let data = await api.getCountryCurrency(currencies)
        dispatch(action.getCurrenciesCountryAC(data))
    },dispatch)

}





export const onaboutCountryTC=(newcountry)=>(dispatch)=>{
    dispatch(action.onaboutCountryAC(newcountry))
}


export const errorAlertTC=()=>(dispatch)=>{
    dispatch(action.errorAlertSuccess(''))
}



