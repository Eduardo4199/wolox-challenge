import React, {Fragment, useEffect, useState, lazy, Suspense, useCallback} from "react";
import {useHistory} from "react-router-dom";
import "../assets/css/technology.css";
import {userService} from "../services/user.service";
import {technologyService} from "../services/technology.service";
const CheckboxFilter = lazy(() => import("../components/checkboxFilter"));
const Technology = lazy(() => import("../components/technologies/Technology"));
const SearchBar= lazy(() => import("../components/searchBar"));

export function Technologies() {
    const [technologies, setTechnologies] = useState([]);
    const [searchResults, setSearchResult] = useState([]);
    const [filterResults, setFilterResults] = useState([]);
    const [results, setResults] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [order, setOrder] = useState(true); /* true ascendente y false descendente*/
    const history = useHistory();
    const checkboxFilters = ["Back-End", "Front-End", "Mobile"];

    useEffect(()=>{
        technologyService.getTechnologies()
            .then((data) => {
                setTechnologies(data);
                setResults(data);
                if (favourites.length ==! 0) {
                    setFavourites(favourites);
                }
            });
    }, []);

    useEffect(() => {
        matchResults();
    }, [searchResults, filterResults]);

    const matchResults = (() =>{
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
    });

    const manageFavourites = useCallback((item) =>{
        if (favourites.includes(item)) {
            let result = favourites.filter((element) => element.tech !== item.tech);
            setFavourites(result);
            console.log(result);
            localStorage.setItem("favourites", JSON.stringify(result));
        } else {
            favourites.push(item);
            localStorage.setItem("favourites", JSON.stringify(favourites));
        }
    }, [favourites]);

    const logout = () => {
        userService.logout();
        history.push("/Home");
    };

    useEffect(() => {
        sortResults();
    }, [order]);

    const sortResults = useCallback(() => {
        if (order) {
            results.sort(function(a, b) {
                if (a.tech < b.tech) {
                    return -1;
                }
                if (a.tech > b.tech) {
                    return 1;
                }
                return 0;
            });
            console.log(results);
        } else {
            results.sort(function(a, b) {
                if (a.tech > b.tech) {
                    return -1;
                }
                if (a.tech < b.tech) {
                    return 1;
                }
                return 0;
            });
            console.log(results);
        }
    });

    return (
        <Fragment>
            <div className="wrapper">
                <nav>
                    <button onClick={() => logout()}>Logout</button>
                </nav>
                <h1>Tecnologias</h1>
                <Suspense fallback={<h2>Cargando...</h2>}>
                    <div className="">
                        <div className="items">
                            {results &&
                                <Fragment>
                                    <div>
                                        <button onClick={(e) => setOrder(!order)}></button>
                                    </div>
                                    <SearchBar setResults={setSearchResult} list={technologies}/>
                                    <CheckboxFilter filters={checkboxFilters} techs={technologies} setResults={setFilterResults}/>
                                    <div className="item">
                                        {results.map((item, index) => (
                                            <Technology item={item} key={index} manageFavourites={manageFavourites}
                                                isFavourite={favourites.includes(item)}/>
                                        ))}
                                    </div>
                                </Fragment>
                            }
                        </div>
                    </div>
                </Suspense>
            </div>
        </Fragment>
    );
}
