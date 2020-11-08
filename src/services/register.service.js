/* eslint-disable */

import '../json/countries.json';
import '../json/states.json';
import { callApi } from './service';

export const registerService = {
    getCountries,
    getStates,
    registerUser
}

const countries = require('../json/countries.json');
const states = require('../json/states.json');

function getCountries(){
    return countries
    
}

function getStates(country){
    let countriesStates =  states.states.filter(item => item.country == country)
    return countriesStates
}

function registerUser(params){
    return callApi("signup","POST",params)
}

function addUserDB(data){

}