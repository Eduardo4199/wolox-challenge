import React, {Fragment, useEffect, useState} from "react";
import {technologyService} from "../services/technology.service";
import {SearchBar} from "../components/searchBar";
import {CheckboxFilter} from "../components/checkboxFilter";

export function Technologies() {
    const [technologies, setTechnologies] = useState();
    const [results, setResults] = useState();
    const checkboxFilters = ["Back-End", "Front-End", "Mobile"];

    useEffect(()=>{
        technologyService.getTechnologies()
            .then((data) => {
                setTechnologies(data);
                setResults(data);
                console.log(technologies);
            });
    }, []);

    return (
        <Fragment>
            <div>
                <h1>Tecnologias</h1>
                {results &&
                    <Fragment>
                        <SearchBar setResults={setResults} list={technologies}/>
                        <CheckboxFilter filters={checkboxFilters} results={results} techs={technologies} setResults={setResults}/>
                        {results.map((item, index) => (
                            <div key={index}>
                                {console.log(item)}
                                <p>{item.tech}</p>
                            </div>
                        ))}
                    </Fragment>
                }
            </div>
        </Fragment>
    );
}
