import React, {Fragment, useCallback, useEffect, useState} from "react";

export const SearchBar = React.memo((props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const editSearchTerm = useCallback((e) =>{
        setSearchTerm(e.target.value);
    }, [searchTerm]);

    useEffect(()=>{
        props.setResults(props.list);
    }, []);

    useEffect(() => {
        searchWord();
    }, [searchTerm]);

    const searchWord = useCallback(() => {
        if (searchTerm != "") {
            return props.setResults(props.list.filter((item) => item.tech.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            return props.setResults(props.list);
        }
    });

    return (
        <Fragment>
            <input type="text" onChange={(e) => {
                editSearchTerm(e);
            }}/>
        </Fragment>
    );
});
SearchBar.displayName = "SearchBar";

export default SearchBar;
