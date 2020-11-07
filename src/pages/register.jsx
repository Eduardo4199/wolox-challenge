/* eslint-disable */
import React, { Fragment } from "react";
import { useForm, Controller  } from "react-hook-form";
/**
 * @param {props} props
 * @return {string}
 */
export function Register(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        Nombre
        <input name="name" ref={register({ required: true })} />
        Apellido
        <input name="last_name" ref={register({ required: true })} />
        Pais
{/*         <Controller
        name="iceCreamType"
        as={Select}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
        control={control}
        rules={{ required: true }}
      /> */}
        Departamento/Provincia
        <input></input>
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
