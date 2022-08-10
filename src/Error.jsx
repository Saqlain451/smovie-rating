import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);

    setInterval(() => {
      setCount(count - 1);
    }, 1000);
  }, [count,navigate]);
  return (
    <>
      <h3 className="text-center">404 Page not found</h3>
      <h3 className="text-center">
        You will redirect to home page after {count} second
      </h3>
      <button
        className="btn btn-warning"
        onClick={() => {
          navigate("/home");
        }}
      >
        Go to Home Page
      </button>
    </>
  );
};

export default Error;
