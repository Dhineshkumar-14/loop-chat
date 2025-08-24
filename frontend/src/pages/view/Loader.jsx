import React from "react";
import { useSelector } from "react-redux";
import "../style/Loader.css";

const Loader = () => {
  const isLoaderVisible = useSelector(
    (state) => state.loaderSlicer.isLoaderVisible
  );
  if (isLoaderVisible)
    return (
      <div className="loader-overlay">
        <div className="spinner" role="status" aria-label="Loading"></div>
      </div>
    );
};

export default Loader;
