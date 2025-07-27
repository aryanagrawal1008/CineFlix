import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import Cards from "./Components/Cards";
import { Outlet } from "react-router-dom";
import Banner from "./Components/Banner";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Components/Pagination";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // 🔄 current page
  const [watchlist, setWatchList] = useState([]);

  const addToWatchlist = (movieObj) => {
    const newWatchList = [...watchlist, movieObj];
    setWatchList(newWatchList);
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
    console.log(newWatchList);
  };

  const handleRemoveFromWatchList = (movieObj) => {
    const filteredWatchlist = watchlist.filter((movie) => movie.imdbid !== movieObj.imdbid);
    setWatchList(filteredWatchlist);
  };
  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem("watchlist");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      const options = {
        method: "GET",
        url: "https://ott-details.p.rapidapi.com/advancedsearch",
        params: {
          start_year: "1970",
          end_year: "2020",
          min_imdb: "6",
          max_imdb: "7.8",
          genre: "action",
          language: "english",
          type: "movie",
          sort: "latest",
          page: String(page),
        },
        headers: {
          "x-rapidapi-key":
            "15951ad701msh71e2c85d828e6d0p1e2064jsn7602034fe1c8",
          "x-rapidapi-host": "ott-details.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setMovies(response.data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]); // re-fetch on page change

  // 🔘 Pagination handlers
  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Nav />

      

      <Outlet context={{ movies, loading,page,addToWatchlist ,watchlist,handleRemoveFromWatchList,setWatchList}} />

      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        page={page}
      ></Pagination>
    </>
  );
}

export default App;
