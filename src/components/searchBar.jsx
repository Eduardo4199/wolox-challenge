import React, {Fragment, useEffect, useState} from "react";

export function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const editSearchTerm = (e) =>{
        setSearchTerm(e.target.value);
    };

    useEffect(()=>{
        props.setResults(props.list);
    }, []);

    useEffect(() => {
        if (searchTerm != "") {
            return props.setResults(props.list.filter((item) => item.tech.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            return props.setResults(props.list);
        }
    }, [searchTerm]);

    return (
        <Fragment>
            <input type="text" onChange={(e) => {
                editSearchTerm(e);
            }}/>
        </Fragment>
    );
}
