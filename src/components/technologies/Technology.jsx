import React, {Fragment, useEffect, useState} from "react";

export default function Technology(props) {
    const [isFavourite, setIsFavourite] = useState(props.isFavourite);

    useEffect(() => {
        setIsFavourite(!isFavourite);
    }, [props.isFavourite]);

    return (
        <Fragment>
            <div className="card">
                <div className="" key={props.index}>
                    <div className="">
                        <span><img src={props.item.logo}/></span>
                    </div>
                    <h3>{props.item.tech}</h3>
                    <span>Año: {props.item.year}</span>
                    <span>Autor: {props.item.author}</span>
                    <span>Licencia: {props.item.license}</span>
                    <span>Lenguaje: {props.item.language}</span>
                    <span>Tipo: {props.item.type}</span>
                    <input type="checkbox" name="favourite"
                        onClick={() => props.manageFavourites(props.item)} checked={isFavourite}/>
                </div>
            </div>
        </Fragment>
    );
}
