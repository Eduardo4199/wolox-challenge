import React, {Fragment, useState} from "react";
import "../assets/css/technology.css";

export default function CheckboxFilter(props) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const manageFilter = (item) =>{
        let filters = selectedFilters;
        if (filters.includes(item)) {
            let aux = filters.indexOf(item);
            filters.splice(aux);
        } else {
            filters.push(item);
        }
        setSelectedFilters(filters);
        applyFilter();
    };

    const applyFilter = () => {
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
    };

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
};
