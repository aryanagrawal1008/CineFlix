import React from "react";
import Card from "./Card";
import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";

const Cards = () => {
  const {
    movies,
    loading,
    page,
    addToWatchlist,
    watchlist,
    handleRemoveFromWatchList,
  } = useOutletContext(); // 👈 Receive from App.jsx

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <>
      <Banner page={page} />
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {movies.map((movie, index) => (
              <Card
                key={index}
                movie={movie}
                addToWatchlist={addToWatchlist}
                watchlist={watchlist}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
