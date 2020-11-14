import React, {Fragment} from "react";

export default function Technology(props) {
    return (
        <Fragment>
            <div className="item">
                <div className="" key={props.index}>
                    <div className="">
                        <span className=""><img src={props.item.logo} alt=""/></span>
                    </div>
                    <div className="">{props.item.tech}</div>
                    <input type="checkbox" name="favourite"
                        onClick={() => props.manageFavourites(props.item)} checked={props.isFavourite}/>
                    {console.log(props.isFavourite)}
                </div>
            </div>
        </Fragment>
    );
}
