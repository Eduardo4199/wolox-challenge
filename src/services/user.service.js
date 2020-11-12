
export const userService = {
    login,
};

function login(data) {
    let users = JSON.parse(localStorage.getItem("users"));
    let credentials = {
        email: data.email,
        password: data.password,
    };
    console.log(users);
    console.log(credentials);
    if (users.email === data.email && users.password === data.password) {
        localStorage.setItem("loggedUser", JSON.stringify(data));
        return true;
    } else {
        return false;
    }
}
