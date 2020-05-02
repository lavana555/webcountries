
 import * as axios from "axios";

const instance = axios.create({
     baseURL: "https://restcountries.eu/rest/v2/",
 })
 export const api={
     getCountryALL(){
         return  instance.get(`all`)
     },
    getCountryFullName(fullName) {
         return instance.get(`name/${fullName}?fullText=true`)
     },
    getCountryShortName(shortName) {
         return  instance.get(`name/${shortName}`)
     },
    getCountryCurrency(currencyCode) {
         return  instance.get(`currency/${currencyCode}`)
     },
    getCountryCode(code){
         return  instance.get(`alpha/${code}`)
     }

}


