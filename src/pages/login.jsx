import React, {Fragment, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../assets/css/login.css";
import {userService} from "../services/user.service";
/**
 * @return {string} app view.
 * @param {Object} props
 */
export function Login(props) {
    const {register, handleSubmit, errors} = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        let result = userService.login(data);
        if (result) {
            history.push("/Technologies");
        }
    };

    useEffect(() =>{
        let user = JSON.parse(localStorage.getItem("loggedUser"));
        if (user) {
            history.push("/Technologies");
        }
    }, []);

    return (
        <Fragment>
            <div>
                <div className="loginForm">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="" htmlFor="email">Email</label>
                        <input type="text" name="email" ref={register({required: true})} />
                        {errors.email &&
                        <Fragment>
                            <span>Ingrese un correo</span>
                            <br></br>
                        </Fragment>
                        }
                        <label className="" htmlFor="password">Password</label>
                        <input type="password" name="password" ref={register({required: true})} />
                        {errors.password &&
                            <span>Ingrese una contraseña</span>
                        }
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
