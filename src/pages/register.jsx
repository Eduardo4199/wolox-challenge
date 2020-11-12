import React, {Fragment, useEffect, useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {registerService} from "../services/register.service";
import "../assets/css/register.css";

export function Register(props) {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();

    const {register, handleSubmit, control, errors, getValues} = useForm();
    const onSubmit = (data) => {
        registerService.registerUser(data);
    };

    useEffect(() => {
        setCountries(registerService.getCountries);
        let user = JSON.parse(localStorage.getItem("loggedUser"));
        if (user) {
            history.push("/Technologies");
        }
    }, []);

    useEffect(() => {
        setStates(registerService.getStates(selectedCountry));
    }, [selectedCountry]);

    return (
        <Fragment>
            <div >
                <div className="registerForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Nombre</label>
                        <input type="text" name="name" ref={register({required: true})} />
                        <label>Apellido</label>
                        <input type="text" name="last_name" ref={register({required: true})} />
                        <label>Pais</label>
                        {countries.countries && (
                            <Controller
                                as={
                                    <select onChange={(e) => setSelectedCountry(e.target.value)}>
                                        <option>Seleccione un pais</option>
                                        {countries.countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                }
                                control={control} name="country" />
                        )}
                        <label>Departamento/Provincia</label>
                        {states && (
                            <Controller
                                as={
                                    <select>
                                        {states.map((state, index) => (
                                            <option key={index} value={state.state}>
                                                {state.state}
                                            </option>
                                        ))}
                                    </select>
                                }
                                control={control} name="state"/>
                        )}
                        <label>Email</label>
                        <input type="text"name="email" ref={register({required: true})} />
                        <label>Telefono</label>
                        <input name="phone" ref={register({required: true})} type="number" pattern="[0-9]"/>
                        <label>Password</label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Debes incluir una contraseña",
                            }}
                            as={<input name="password" ref={register({required: true})} type="password"/>}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        <label>Repeat password</label>
                        <Controller
                            name="password_repeat"
                            control={control}
                            rules={{
                                required: "Debes incluir una contraseña",
                                validate: (value) => {
                                    if (value === getValues()["password"]) {
                                        return true;
                                    } else {
                                        return "Las contraseñas no concuerdan";
                                    }
                                },
                            }}
                            as={
                                <input name="repeat_password" ref={register({required: true})} type="password"/>
                            }
                        />
                        {errors.password_repeat && <p> {errors.password_repeat.message}</p>}
                        <input
                            ref={register({
                                required: "Debe aceptar las condiciones y terminos",
                            })}
                            name="termscond"
                            type="checkbox"
                        />
                        {errors.termscond && <label className="error">{errors.termscond.message}</label>}
                        <label>Terminos y condiciones</label>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
