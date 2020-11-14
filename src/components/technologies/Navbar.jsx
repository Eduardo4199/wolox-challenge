import React, {Fragment} from "react";
"../assets/css/technology.css";

export default function Navbar(props) {
    return (
        <Fragment>
            <nav className="topnav">
                <div>
                    <a onClick={() => props.logout}>Logout</a>
                    <span>{props.favourites}</span>
                </div>
            </nav>
        </Fragment>
    );
}
