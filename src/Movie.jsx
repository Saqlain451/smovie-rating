import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalHook } from "./Context";

const Movie = () => {
  const { movie, isLoading } = useGlobalHook();

  if (isLoading === true) {
    return (
      <div className="row">
        <div className="col-md-12 col-10">
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="row justify-content-center justify-content-lg-start gy-4">
              {movie.map((curEl) => {
                const { Title, imdbID, Poster } = curEl;
                const mTitle = Title.substring(0, 11);
                return (
                  <div className="col-md-3 col-10" key={imdbID}>
                    <div className="card">
                      <img src={Poster} alt={imdbID} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="card-title">
                        {mTitle.length === 11
                          ? `${mTitle}...`
                          : mTitle}
                        </h5>
                        <button className="btn btn-info">
                          <NavLink
                            to={`/movie/${imdbID}`}
                            className="text-white text-decoration-none"
                          >
                            Know More
                          </NavLink>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
