import React, {Fragment} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../assets/css/login.css";
import {userService} from "../services/user.service";
/**
 * @return {string} app view.
 * @param {Object} props
 */
export function Login(props) {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        let result = userService.login(data);
        if (result) {
            history.push("/Technologies");
        }
    };

    return (
        <Fragment>
            <div>
                <div className="loginForm">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="" htmlFor="email">Email</label>
                        <input type="text" name="email" ref={register({required: true})} />
                        <label className="" htmlFor="password">Password</label>
                        <input type="password" name="password" ref={register({required: true})} />
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
