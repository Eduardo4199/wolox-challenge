import React, {Fragment, useState, useCallback} from "react";
import "../assets/css/technology.css";

export const CheckboxFilter = React.memo((props) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const manageFilter = useCallback((item) =>{
        let filters = selectedFilters;
        if (filters.includes(item)) {
            let aux = filters.indexOf(item);
            filters.splice(aux);
        } else {
            filters.push(item);
        }
        setSelectedFilters(filters);
        applyFilter();
    }, []);

    const applyFilter = useCallback(() => {
        let resultsAux = [];
        if (selectedFilters.length > 0) {
            selectedFilters.forEach((element) => {
                console.log(element);
                let aux = props.techs.filter((item) => item.type.toLowerCase() == element.toLowerCase());
                aux.forEach((element) => {
                    resultsAux.push(element);
                });
            });
            props.setResults(resultsAux);
        } else {
            props.setResults(props.techs);
        }
    }, [selectedFilters]);

    return (
        <Fragment>
            <div className="row">
                {props.filters &&
                    props.filters.map((item, index) => (
                        <div key={index}>
                            <label>{item}</label>
                            <input type="checkbox" value={item} onClick={() => manageFilter(item)}></input>
                        </div>
                    ))}
            </div>
        </Fragment>
    );
});

CheckboxFilter.displayName = "SearchBar";

export default CheckboxFilter;
