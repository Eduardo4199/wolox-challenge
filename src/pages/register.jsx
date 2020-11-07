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

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <select onChange={(e) => setSelectedCountry(e.target.value)} ref={register({ required: true })}>
            <option defaultValue>Seleccione un pais</option>
            {countries.countries.map((country, index) => (
              <option value={country}>{country}</option>
            ))}
          </select>
        )}
        Departamento/Provincia
        {states && (
          <select ref={register({ required: true })}>
            {states.map((state, index) => (
              <option value={state}>{state.state}</option>
            ))}
          </select>
        )}
        Email
        <input name="email" ref={register({ required: true })} />
        Telefono
        <input name="phone" ref={register({ required: true })} />
        Contraseña
        <input name="password" ref={register({ required: true })} />
      </form>
    </Fragment>
  );
}
