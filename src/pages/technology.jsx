import React, {Fragment, useEffect, useState} from "react";
import {technologyService} from "../services/technology.service";
import {SearchBar} from "../components/searchBar";
import {CheckboxFilter} from "../components/checkboxFilter";
import "../assets/css/technology.css";

export function Technologies() {
    const [technologies, setTechnologies] = useState([]);
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
        if (searchResults.length > 0 && filterResults.length === 0) {
            console.log(searchResults);
            setResults(searchResults);
        }
        if (filterResults.length > 0 && searchResults.length === 0) {
            console.log(filterResults);
            setResults(filterResults);
        }
        if (searchResults.length > 0 && filterResults.length > 0) {
            const intersection = searchResults.filter((element) => filterResults.includes(element));
            console.log(intersection);
            setResults(intersection);
        }
    };

    return (
        <Fragment>
            <div className="wrapper">
                <h1>Tecnologias</h1>
                <div className="">
                    <div className="items">
                        {results &&
                            <Fragment>
                                <SearchBar setResults={setSearchResult} list={technologies}/>
                                <CheckboxFilter filters={checkboxFilters} techs={technologies} setResults={setFilterResults}/>
                                <div className="item">
                                    {results.map((item, index) => (
                                        <div className="" key={index}>
                                            <div className="">
                                                <span className=""><img src={item.logo} alt=""/></span>
                                            </div>
                                            <div className="">{item.tech}</div>
                                        </div>
                                    ))}
                                </div>
                            </Fragment>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
