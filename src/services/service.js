export async function callApi(url, method) {

    return fetch(`${url}`,{method})
        .then((response) => {
            return response.json()
        })
        .catch((error) =>{
            console.log(error)
            return "Error"
        });
}