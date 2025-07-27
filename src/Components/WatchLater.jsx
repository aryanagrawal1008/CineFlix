import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";



const WatchLater = () => {
  const { watchlist, handleRemoveFromWatchList, setWatchList } =
    useOutletContext();
  const [search, setSearch] = useState();
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let sortIncrease = () => {
    let sortedIncrease = [...watchlist].sort((a, b) => a.imdbrating - b.imdbrating);
    setWatchList(sortedIncrease);
  };

  let sortDecrease = () => {
    let sortedDecrease = [...watchlist].sort((a, b) => b.imdbrating - a.imdbrating);
    setWatchList(sortedDecrease);
  };
  const [genre, setGenre] = useState(["All"]);
  const [currentGenre, setCurrentGenre] = useState("All");
  useEffect(() => {
    let temp = watchlist
      .map((movie) => movie.genre && movie.genre[1])
      .filter((g) => g && g !== "All");
    setGenre(["All", ...Array.from(new Set(temp))]);
  }, [watchlist]);

  let handleFilter = (gen) => {
    setCurrentGenre(gen);
  }

  return (
    <>
      <div
        role="group"
        aria-label="Basic outlined example"
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {genre.map((gen, index) => {
          return (
            <button
              key={index}
              type="button"
              className={currentGenre === gen ? "btn btn-outline-primary" : "btn btn-outline-secondary"}
              style={{ margin: "10px", borderRadius: "10px" }}
              onClick={() => handleFilter(gen)}
            >
              {gen}
            </button>
          );
        })}
        
      </div>
      <input
        type="text"
        placeholder="Search movie"
        className="inputlater"
        onChange={handleSearch}
        value={search}
      />

      {/* Table below buttons */}
      <div
        className="bd-example"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Poster</th>
                <th scope="col">Name</th>
                <th scope="col">Genre</th>
                <th scope="col" className="box-re">
                  <div style={{ padding: "3px", margin: "2px",cursor:"pointer" }} onClick={sortIncrease}>&#8593; </div>
                  <div style={{ padding: "3px", margin: "2px" }}>Ratings</div>
                  <div style={{ padding: "3px", margin: "2px", cursor:"pointer" }} onClick={sortDecrease}>&#8595;</div>
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {watchlist.filter((movie) => {
                if (currentGenre === "All") return true;
                return movie.genre && movie.genre[1] === currentGenre;
              }).filter((movieObj) => {
                  if (!search) return true;
                  return movieObj.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((movieObj, idx) => {
                  const imageUrl =
                    movieObj.imageurl?.[0] ||
                    "https://via.placeholder.com/300x450?text=No+Image";
                  return (
                    <tr key={idx}>
                      <th scope="row">
                        <img
                          src={imageUrl}
                          alt=""
                          style={{ width: "2rem", height: "3rem" }}
                        />
                      </th>
                      <td>{movieObj.title || "Cell"}</td>
                      <td>{(movieObj.genre && movieObj.genre[1]) || "Cell"}</td>
                      <td>{movieObj.imdbrating || "Cell"}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => handleRemoveFromWatchList(movieObj)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WatchLater;
