
export const userService = {
    login,
    logout,
};

function login(data) {
    let users = JSON.parse(localStorage.getItem("users"));
    console.log(data);
    let credentials = {
        email: data.email,
        password: data.password,
    };
    console.log(users);
    console.log(credentials);
    if (users.email === data.email && users.password === data.password) {
        localStorage.setItem("loggedUser", JSON.stringify(credentials));
        return true;
    } else {
        return false;
    }
}

function logout() {
    localStorage.removeItem("loggedUser");
}
