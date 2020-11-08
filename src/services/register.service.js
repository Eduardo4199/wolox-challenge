import "../json/countries.json";
import "../json/states.json";
import {callApi} from "./service";

export const registerService = {
    getCountries,
    getStates,
    registerUser,
};

const countries = require("../json/countries.json");
const states = require("../json/states.json");

function getCountries() {
    return countries;
}

function getStates(country) {
    let countriesStates = states.states.filter((item) => item.country == country);
    return countriesStates;
}

function registerUser(params) {
    let result = callApi("signup", "POST", params);
    let data = {
        "name": params.name,
        "last_name": params.last_name,
        "country": params.country,
        "email": params.email,
        "state": params.state,
        "password": params.password,
    };
    addUserDB(data);
    return result == "qiowAS9ndnjLKSS32LaLAPlDKL2" ? true : false;
}

function addUserDB(data) {
    let users = localStorage.getItem("users");
    if (users) {
        localStorage.setItem("users", JSON.stringify(data));
    } else {
        localStorage.setItem("users", JSON.stringify(data));
    }
}
