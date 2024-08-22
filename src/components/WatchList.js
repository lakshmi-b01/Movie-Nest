import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function WatchList({ movies, watchlist, toggleWatchList }) {
  return (
    <div>

      {/* <h1 className="title">Your WatchList appears here</h1> */}

      {watchlist.length === 0 ? (
        <h1 className="title">
            Your watchlist is currently empty! Go to home to add movies to watchlist
        </h1>
      ) : (
        <h1 className="title">
            Your WatchList appears here!
        </h1>
      )}

      <div className="watchlist">
        {watchlist.map(id => {
          const movie = movies.find(movie => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              isWatchListed={true}
              toggleWatchList={toggleWatchList}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
