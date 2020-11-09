/* eslint-disable*/
import React, {Fragment, useState} from "react";
import {useForm} from "react-hook-form";

export function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState();
    const {handleSubmit} = useForm()

    const editSearchTerm = (e) =>{
        setSearchTerm(e.target.value);
    };

    const dynamicSearch = () => {
        return props.setResults(props.list.filter(item => item.tech.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(() => dynamicSearch())}>
                <input type="text" onChange={(e) => editSearchTerm(e)}/>
                <input type="submit" />
            </form>
        </Fragment>
    );
}
