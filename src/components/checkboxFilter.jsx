import React, {Fragment, useState} from "react";

export function CheckboxFilter(props) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const addFilter = (item) =>{
        let filters = selectedFilters;
        if (filters.includes(item)) {
            filters.splice(item);
        } else {
            filters.push(item);
        }
        setSelectedFilters(filters);
        filterResults();
    };

    const filterResults = () => {
        let results = props.results;
        let resultsAux = [];
        console.log(selectedFilters);
        console.log(results);
        if (selectedFilters.length != 0) {
            selectedFilters.forEach((element) => {
                console.log(element);
                let aux = results.filter((item) => item.type.toLowerCase() == element.toLowerCase());
                aux.forEach((element) => {
                    resultsAux.push(element);
                });
            });
        } else {
            props.setResults(props.results);
        }
        console.log(resultsAux);
        props.setResults(resultsAux);
    };

    return (
        <Fragment>
            {props.filters &&
                props.filters.map((item, index) => (
                    <div key={index}>
                        <label>{item}</label>
                        <input type="checkbox" value={item} onClick={() => addFilter(item)}></input>
                    </div>
                ))}
        </Fragment>
    );
}
