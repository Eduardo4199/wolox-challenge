import React, {Fragment, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {technologyService} from "../services/technology.service";
import {SearchBar} from "../components/searchBar";
import {CheckboxFilter} from "../components/checkboxFilter";
import "../assets/css/technology.css";
import {Technology} from "../components/technologies/Technology";
import {userService} from "../services/user.service";

export function Technologies() {
    const [technologies, setTechnologies] = useState([]);
    const [searchResults, setSearchResult] = useState([]);
    const [filterResults, setFilterResults] = useState([]);
    const [results, setResults] = useState([]);
    const [favourites, setFavourites] = useState([]);
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

    const manageFavourites = (item) =>{
        if (favourites.includes(item)) {
            let result = favourites.filter((element) => element.tech !== item.tech);
            setFavourites(result);
            console.log(result);
            localStorage.setItem("favourites", JSON.stringify(result));
        } else {
            favourites.push(item);
            localStorage.setItem("favourites", JSON.stringify(favourites));
        }
    };

    const logout = () => {
        userService.logout();
        history.push("/Home");
    };

    return (
        <Fragment>
            <div className="wrapper">
                <button onClick={() => logout()}>Logout</button>
                <h1>Tecnologias</h1>
                <div className="">
                    <div className="items">
                        {results &&
                            <Fragment>
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
            </div>
        </Fragment>
    );
}
