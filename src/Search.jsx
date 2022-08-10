import React from "react";
import { useGlobalHook } from "./Context";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  const { search, setSearch, submit, setSubmit, isError } = useGlobalHook();
  return (
    <>
      <nav className="navbar navbar-expand-md bg-white">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            SMDB
          </NavLink>
          <form
            action=""
            className="d-flex gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmit(search);
            }}
          >
            <input
              type="text"
              className="form-control"
              value={search}
              placeholder="Search movie name.."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="btn btn-outline-success">
              <BsSearch />
            </button>
          </form>
        </div>
      </nav>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h6 className="text-center mt-4">
            {isError.show ? isError.msg : `Showing result for ${submit} movie`}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Search;
