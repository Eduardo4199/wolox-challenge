import React, {Fragment, useEffect, useState} from "react";
import {technologyService} from "../services/technology.service";
import {SearchBar} from "../components/searchBar";

export function Technologies() {
    const [technologies, setTechnologies] = useState();
    const [results, setResults] = useState();

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
                        <SearchBar list={results} setResults={setResults}/>
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
