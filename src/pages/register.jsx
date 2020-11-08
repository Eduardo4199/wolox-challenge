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

  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    registerService.registerUser(data);
  };

  useEffect(() => {
    setCountries(registerService.getCountries);
  }, []);

  useEffect(() => {
    setStates(registerService.getStates(selectedCountry));
    console.log()
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
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            }
            control={control} name="country"
          />
        )}
        Departamento/Provincia
        {states && (
            <Controller
              as={
              <select>
                {states.map((state, index) => (
                  <option key={index} value={state.state}>{state.state}</option>
                ))}
              </select>
              }
              control={control} name="state"
            />
        )}
        Email
        <input name="email" ref={register({ required: true })} />
        Telefono
        <input name="phone" ref={register({ required: true })} />
        Contraseña
        <input name="password" ref={register({ required: true })} />
        <button type="submit">Registrarse</button>
      </form>
    </Fragment>
  );
}
