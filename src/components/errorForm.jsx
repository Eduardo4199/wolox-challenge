import React from "react";

export function ErrorForm(props) {
    return (
        <div className="alert_msg_input">
            {props.field?.type === "required" && <span>El campo es requerido</span>}
            {props.field?.type === "pattern" && <span>El campo es inválido</span>}
            {props.field?.type === "minLength" && <span>El mínimo de caracteres es de {props.min}</span>}
            {props.field?.type === "maxLength" && <span>El máximo de caracteres es de {props.max}</span>}
        </div>
    );
};
