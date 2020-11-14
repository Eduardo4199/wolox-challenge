import "../json/countries.json";
import "../json/states.json";
import {callApi} from "./service";
import {userService} from "./user.service";

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

async function registerUser(params) {
    let result = await callApi("signup", "POST", params);
    let data = {
        "name": params.name,
        "last_name": params.last_name,
        "country": params.country,
        "email": params.email,
        "state": params.state,
        "password": params.password,
    };
    addUserDB(data);
    console.log(result);
    let registerResult = result.token == "qiowAS9ndnjLKSS32LaLAPlDKL2" ? true : false;
    if (registerResult) {
        userService.login(params);
        return true;
    } else {
        return false;
    }
}

function addUserDB(data) {
    let user = {
        email: data.email,
        password: data.password,
    };
    localStorage.setItem("users", JSON.stringify(user));
    localStorage.setItem("favourites", JSON.stringify([]));
}
