/* eslint-disable */
import React, { Fragment, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { registerService } from "../services/register.service";
/**
 * @param {props} props
 * @return {string}
 */

export function Register(props) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  const { register, handleSubmit, control, errors, getValues } = useForm();
  const onSubmit = (data) => {
    registerService.registerUser(data);
  };

  useEffect(() => {
    setCountries(registerService.getCountries);
  }, []);

  useEffect(() => {
    setStates(registerService.getStates(selectedCountry));
  }, [selectedCountry]);

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        Nombre
        <input name="name" ref={register({ required: true })} />
        Apellido
        <input name="last_name" ref={register({ required: true })} />
        Pais
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
        Departamento/Provincia
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
        Email
        <input name="email" ref={register({ required: true })} />
        Telefono
        <input name="phone" ref={register({ required: true })} type="number" pattern="[0-9]"/>
        <label>Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Debes incluir una contraseña",
          }}
          as={<input name="password" ref={register({ required: true })} />}
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
            <input name="repeat_password" ref={register({ required: true })} />
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
        {errors.termscond && <p class="error">{errors.termscond.message}</p>}
        <button type="submit">Registrarse</button>
      </form>
    </Fragment>
  );
}
