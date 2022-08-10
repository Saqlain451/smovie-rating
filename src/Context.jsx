import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("titanic");
  const [submit, setSubmit] = useState("titanic");
  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState({
    show: "",
    msg: "",
  });
  const getApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading(false);
        setMovie(data.Search);
        setisError({
          show: false,
          msg: "",
        });
      } else {
        setisError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData(`${process.env.REACT_APP_API}&s=${submit}`);
  }, [submit]);
  return (
    <>
      <AppContext.Provider
        value={{
          movie,
          isError,
          isLoading,
          search,
          setSearch,
          submit,
          setSubmit,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalHook = () => useContext(AppContext);

export { AppProvider, useGlobalHook };
