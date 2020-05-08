
 import * as axios from "axios";

const instance = axios.create({
     baseURL: "https://restcountries.eu/rest/v2/",
 })

export  const api={

 save: {},

 _get(path) {
     if (this.save[path]) return Promise.resolve(this.save[path]);

     return instance.get(path)
         .then(res => {
             this.save[path] = res.data;
             return res.data
         })
         .catch(error => {
             console.error(error)
             throw new Error("error server")
         })
 },
    getCountryFullName(fullName) {
     return this._get(`name/${fullName}?fullText=true`)
 },
    getCountryShortName(shortName) {
     return this._get(`name/${shortName}`)
 },
    getCountryCurrency(currencyCode) {
     return this._get(`currency/${currencyCode}`)
 },
    getCountryCode(code){
     return this._get(`alpha/${code}`)
 },
    getCountryALL(){
     return this._get(`all`)
 }
 }
