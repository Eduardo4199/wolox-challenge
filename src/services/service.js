export async function callApi(action, method, body) {
    const url = "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/";

    return fetch(`${url}` + `${action}`, {
        method: method,
        body: JSON.stringify(body),
    })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
            return "Error";
        });
}
