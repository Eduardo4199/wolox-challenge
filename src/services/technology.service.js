import {callApi} from "./service";

export const technologyService = {
    getTechnologies,
};

function getTechnologies() {
    return callApi("techs", "GET");
}
