const Card = ({
  movie,
  addToWatchlist,
  handleRemoveFromWatchList,
  watchlist,
}) => {
  const imageUrl =
    movie.imageurl?.[0] || "https://via.placeholder.com/300x450?text=No+Image";
  function doesContain(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].imdbid === movie.imdbid) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img
          src={imageUrl}
          className="card-img-top kingimg"
          alt={movie.title || "Untitled"}
          style={{ height: "300px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{movie.title || "Untitled"}</h5>
          <p className="card-text">
            {movie.synopsis
              ? movie.synopsis.slice(0, 100) + "..."
              : "No description available."}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={`https://www.imdb.com/title/${movie.imdbid}`}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  style={{ margin: "10px 10px" }}
                >
                  IMDb
                </button>
              </a>
              {!doesContain(movie) ? (
                <button
                  type="button"
                  class="btn btn-success"
                  style={{ width: "10rem", height: "4rem" }}
                  onClick={() => addToWatchlist(movie)}
                >
                  Add to Watch later &#129321;
                </button>
              ) : (
                <button
                  className="btn btn-outline-danger"
                  style={{ width: "10rem", height: "4rem" }}
                  onClick={() => handleRemoveFromWatchList(movie)}
                >
                  Remove from Watch later &#129402;
                </button>
              )}
            </div>
            <small className="text-muted" style={{ padding: "0px 20px" }}>
              {(movie.genre && movie.genre[1]) || "Genre"} | {movie.released} |
              ⭐ {movie.imdbrating}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
