import React, {Fragment, useEffect, useState} from "react";
import {technologyService} from "../services/technology.service";
import {SearchBar} from "../components/searchBar";
import {CheckboxFilter} from "../components/checkboxFilter";

export function Technologies() {
    const [technologies, setTechnologies] = useState();
    const [searchResults, setSearchResult] = useState([]);
    const [filterResults, setFilterResults] = useState([]);
    const [results, setResults] = useState([]);
    const checkboxFilters = ["Back-End", "Front-End", "Mobile"];

    useEffect(()=>{
        technologyService.getTechnologies()
            .then((data) => {
                setTechnologies(data);
                setResults(data);
            });
    }, []);

    useEffect(() => {
        matchResults();
    }, [searchResults, filterResults]);

    const matchResults = () =>{
        if (searchResults && !filterResults) {
            console.log(searchResults);
            setResults(searchResults);
        }
        if (filterResults && !searchResults) {
            console.log(filterResults);
            setResults(filterResults);
        }
        if (searchResults && filterResults) {
            const intersection = searchResults.filter((element) => filterResults.includes(element));
            console.log(intersection);
            setResults(intersection);
        }
    };

    return (
        <Fragment>
            <div>
                <h1>Tecnologias</h1>
                {results &&
                    <Fragment>
                        <SearchBar setResults={setSearchResult} list={technologies}/>
                        <CheckboxFilter filters={checkboxFilters} techs={technologies} setResults={setFilterResults}/>
                        {results.map((item, index) => (
                            <div key={index}>
                                <p>{item.tech}</p>
                            </div>
                        ))}
                    </Fragment>
                }
            </div>
        </Fragment>
    );
}
