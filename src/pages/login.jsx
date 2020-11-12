import React, {Fragment} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../assets/css/home.css";
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
            <div className="flex-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email</label>
                    <input name="email" ref={register({required: true})} />
                    <label htmlFor="password">Password</label>
                    <input name="password" ref={register({required: true})} />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </Fragment>
    );
}
