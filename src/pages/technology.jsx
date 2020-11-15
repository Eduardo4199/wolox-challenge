import React, {Fragment, useEffect, useState, lazy, Suspense, useCallback} from "react";
import {useHistory} from "react-router-dom";
import "../assets/css/technology.css";
import {userService} from "../services/user.service";
import {technologyService} from "../services/technology.service";
const CheckboxFilter = lazy(() => import("../components/checkboxFilter"));
const Technology = lazy(() => import("../components/technologies/Technology"));
const SearchBar = lazy(() => import("../components/searchBar"));
const Navbar = lazy(() => import("../components/technologies/Navbar"));

export function Technologies() {
    const [technologies, setTechnologies] = useState([]);
    const [searchResults, setSearchResult] = useState([]);
    const [filterResults, setFilterResults] = useState([]);
    const [results, setResults] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [order, setOrder] = useState(true); /* true ascendente y false descendente*/
    const [favLength, setFavLength] = useState();
    const history = useHistory();
    const checkboxFilters = ["Back-End", "Front-End", "Mobile"];

    useEffect(()=>{
        technologyService.getTechnologies()
            .then((data) => {
                setTechnologies(data);
                setResults(data);
                setFavourites(JSON.parse(localStorage.getItem("favourites")));
                setFavLength(JSON.parse(localStorage.getItem("favourites")).length);
                sortResults();
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
        if (favourites.filter((e) => e.tech === item.tech).length > 0) {
            console.log("Es favorito");
            let result = favourites.filter((element) => element.tech !== item.tech);
            setFavourites(result);
            console.log(result);
            setFavLength(result.length);
            console.log(favourites);
            localStorage.setItem("favourites", JSON.stringify(result));
        } else {
            console.log("No es favorito");
            let result = favourites;
            result.push(item);
            setFavourites(result);
            console.log(favourites);
            setFavLength(result.length);
            localStorage.setItem("favourites", JSON.stringify(favourites));
        }
        sortResults();
    }, [favourites]);

    const logout = () => {
        console.log("LOGOUT");
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
        }
    });

    const isFavTech = useCallback((item) => {
        if (favourites.includes(item)) {
            return true;
        } else {
            return false;
        }
    }, []);

    return (
        <Fragment>
            <div className="wrapper">
                <Suspense fallback={<h2>Cargando...</h2>}>
                    <Navbar logout={logout} favourites={favLength}/>
                    <h1>Tecnologias</h1>
                    <div>
                        <div>
                            <div className="filters">
                                <SearchBar setResults={setSearchResult} list={technologies}/>
                                <CheckboxFilter filters={checkboxFilters} techs={technologies} setResults={setFilterResults}/>
                                <div>
                                    <span>Orden:</span>
                                    <button onClick={() => setOrder(!order)}>{order ? "Ascendente" : "Descendente"}</button>
                                </div>
                            </div>
                            {results &&
                                <Fragment>
                                    <div className="items">
                                        {results.map((item, index) => (
                                            <Technology item={item} key={index} manageFavourites={manageFavourites}
                                                isFavourite={isFavTech(item)}/>
                                        ))}
                                    </div>
                                    <div className="total">
                                        <span>Total : {results.length}</span>
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
