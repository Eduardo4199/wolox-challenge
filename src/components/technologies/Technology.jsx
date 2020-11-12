import React, {Fragment} from "react";

export function Technology(props) {
    return (
        <Fragment>
            <div className="item">
                <div className="" key={props.index}>
                    <div className="">
                        <span className=""><img src={props.item.logo} alt=""/></span>
                    </div>
                    <div className="">{props.item.tech}</div>
                    <input type="checkbox" name="favourite" onClick={() => props.manageFavourites(props.item)}/>
                </div>
            </div>
        </Fragment>
    );
}
