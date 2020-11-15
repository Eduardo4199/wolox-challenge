import React, {Fragment} from "react";
"../assets/css/technology.css";

export default function Navbar(props) {
    return (
        <Fragment>
            <nav className="topnav">
                <div>
                    <a><button onClick={() => props.logout()}>Logout</button></a>
                    <span>{props.favourites}</span>
                </div>
            </nav>
        </Fragment>
    );
}
