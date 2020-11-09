import React, {Fragment, useState} from "react";
import {useForm} from "react-hook-form";

export function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState();
    const {handleSubmit} = useForm();

    const editSearchTerm = (e) =>{
        setSearchTerm(e.target.value);
    };

    const dynamicSearch = () => {
        console.log(searchTerm);
        if (searchTerm != "") {
            return props.setResults(props.list.filter((item) => item.tech.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            return props.setResults(props.list);
        }
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit(() => dynamicSearch())}>
                <input type="text" onChange={(e) => {
                    editSearchTerm(e); dynamicSearch();
                }}/>
                <input type="submit" />
            </form>
        </Fragment>
    );
}
