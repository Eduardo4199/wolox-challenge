import React, {Fragment, useEffect, useState} from "react";

export const Technology = React.memo((props) => {
    const [isFavourite, setIsFavourite] = useState();

    useEffect(() => {
        let result = props.favourite.filter((x) => x.tech === props.item.tech);
        if (result.length === 1) {
            setIsFavourite(true);
        } else {
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
                    <button onClick={() => {
                        props.manageFavourites(props.item);
                        setIsFavourite(!isFavourite);
                    }}>{isFavourite ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
                </div>
            </div>
        </Fragment>
    );
});

Technology.displayName = "Technology";

export default Technology;
