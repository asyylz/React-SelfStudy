import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const { movies, loading } = useMovieContext();
  console.log(movies);
  return (
    <div className="flex justify-center flex-wrap">
      {loading ? (
        <h2 className=" text-2xl text-red-700 dark:text-white">Loading...</h2>
      ) : (
        movies.map((movie) => <MovieCard />)
      )}
    </div>
  );
};
export default Main;
