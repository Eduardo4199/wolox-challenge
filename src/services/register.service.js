/* eslint-disable */

import '../json/countries.json';
import '../json/states.json';

export const registerService = {
    getCountries,
    getStates
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