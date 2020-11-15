import React, {Fragment, useEffect, useState} from "react";

export default function Technology(props) {
    const [isFavourite, setIsFavourite] = useState(props.isFavourite);

    useEffect(() => {
        let result = props.favourite.filter((x) => x.tech === props.item.tech);
        console.log(props.item.tech);
        console.log(props.favourite);
        console.log(result);
        if (result.length === 1) {
            console.log("true " + props.item.tech);
            setIsFavourite(true);
        } else {
            console.log("false " + props.item.tech);
            setIsFavourite(false);
        }
    }, [props.favourite, props.item !== undefined]);

    return (
        <Fragment>
            <div className="card">
                <div key={props.index} className={isFavourite ? "favourite" : ""}>
                    <div>
                        <span><img src={props.item.logo}/></span>
                    </div>
                    <h3>{props.item.tech}</h3>
                    <span>Año: {props.item.year}</span>
                    <span>Autor: {props.item.author}</span>
                    <span>Licencia: {props.item.license}</span>
                    <span>Lenguaje: {props.item.language}</span>
                    <span>Tipo: {props.item.type}</span>
                    <label>Favorito</label>
                    <input type="checkbox" name="favourite"
                        onClick={() => props.manageFavourites(props.item)}/>
                </div>
            </div>
        </Fragment>
    );
}
