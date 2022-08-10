import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleMovies = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [iddata, setidData] = useState({
    title: "",
    date: "",
    rating: "",
    country: "",
    poster: "",
  });
  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading(false);
        setidData({
          title: data.Title,
          date: data.Released,
          rating: data.Ratings[0].Value,
          country: data.Country,
          poster: data.Poster,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(`${process.env.REACT_APP_API}&i=${id}`);
  }, [id]);

  if (isLoading === true) {
    return (
      <div className="row my-5">
        <div className="col-md-12">
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-10">
              <div className="card">
                <div className="row d-flex align-items-center">
                  <div className="col-md-6">
                    <img
                      src={iddata.poster}
                      alt="poster"
                      className="img-single mx-auto d-block mx-lg-0"
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="text-center text-lg-start mt-3">Title : {iddata.title}</p>
                    <p className="text-center text-lg-start">Date : {iddata.date}</p>
                    <p className="text-center text-lg-start">Rating : {iddata.rating}</p>
                    <p className="text-center text-lg-start">Country : {iddata.country}</p>
                    <button
                      className="btn btn-outline-primary d-block mx-auto mx-lg-0 mb-3 mb-lg-0"
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default SingleMovies;
