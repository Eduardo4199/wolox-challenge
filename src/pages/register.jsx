import React, {Fragment, useEffect, useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {registerService} from "../services/register.service";
import "../assets/css/register.css";
import {regEx} from "../config";
//  const ErrorForm = lazy(() => import("../components/errorForm"));
import {ErrorForm} from "../components/errorForm";


export function Register(props) {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
    const history = useHistory();
    const {register, handleSubmit, control, errors, getValues, formState} = useForm({mode: "onChange"});
    const onSubmit = (data) => {
        /* registerService.registerUser(data).then((data) => {
            if (data) {
                history.push("/Technologies");
            }
        });*/
        console.log(data);
        console.log(selectedCountry);
    };

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("loggedUser"));
        if (user) {
            history.push("/Technologies");
        }
        setCountries(registerService.getCountries);
    }, []);

    useEffect(() => {
        setStates(registerService.getStates(selectedCountry));
        console.log(selectedCountry);
    }, [selectedCountry]);

    return (
        <Fragment>
            <div >
                <div className="registerForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Nombre</label>
                        <input type="text" name="name" ref={register({required: true, pattern: regEx.letters, minLength: 1, maxLength: 100})} />
                        {errors.name && <ErrorForm field={errors.name} max={255} />}
                        <label>Apellido</label>
                        <input type="text" name="last_name" ref={register({required: true, pattern: regEx.letters, minLength: 1, maxLength: 100})} />
                        {errors.last_name && <ErrorForm field={errors.last_name} max={255} />}
                        <label>Pais</label>
                        {countries.countries && (
                            <select
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                ref={register({
                                    required: "Seleccione un pais",
                                })}
                                name="country"
                            >
                                <option value="">Seleccione un pais</option>
                                {countries.countries.map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        )}
                        {errors.country && (
                            <ErrorForm field={errors.country} max={255} />
                        )}
                        <label>Departamento/Provincia</label>
                        {states && (
                            <select
                                ref={register({
                                    required: "Seleccione un estado",
                                })}
                                name="state"
                            >
                                <option value="">Seleccione un estado</option>
                                {states.map((state, index) => (
                                    <option key={index} value={state.state}>
                                        {state.state}
                                    </option>
                                ))}
                            </select>
                        )}
                        {errors.state && (
                            <ErrorForm field={errors.state} max={255} />
                        )}
                        <label>Email</label>
                        <input type="text"name="email" ref={register({required: true, pattern: regEx.email, minLength: 10, maxLength: 30})} />
                        {errors.email && <ErrorForm field={errors.email} max={255} />}
                        <label>Telefono</label>
                        <input name="phone" ref={register({required: true, pattern: regEx.phone, minLength: 10, maxLength: 20})} type="number"/>
                        {errors.phone && <ErrorForm field={errors.phone} min={10} max={20} />}
                        <label>Password</label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Debes incluir una contraseña",
                                pattern: regEx.password,
                                minLength: 6,
                                maxLength: 255,
                            }}
                            as={<input name="password" ref={register({required: true})} type="password"/>}
                        />
                        {errors.password && <ErrorForm field={errors.password} min={6} max={255} />}
                        <label>Repeat password</label>
                        <Controller
                            name="password_repeat"
                            control={control}
                            rules={{
                                required: "Debes incluir una contraseña",
                                pattern: regEx.password,
                                minLength: 6,
                                maxLength: 255,
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
                        {errors.password_repeat && <ErrorForm field={errors.password_repeat} min={6} max={255} />}
                        <input
                            ref={register({
                                required: "Debe aceptar las condiciones y terminos",
                            })}
                            name="termscond"
                            type="checkbox"
                        />
                        {errors.termscond && <label className="error">{errors.termscond.message}</label>}
                        <label>Terminos y condiciones</label>
                        <input type="submit"disabled={!formState.isValid}></input>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
