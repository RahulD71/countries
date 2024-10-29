import React from "react";
import "./CountriesListShimmer.css";

const CountriesListShimmer = () => {
  //create empty array
  //1. const array = new Array(10).fill(1);
  //2. const array = Array.from({length: 10});
  //Array.from({length: 10}, () => 1)

  //   const mapped = Array.from({ length: 12 }).map((el, i) => {
  //     return <div key={i} className="country-card shimmer-card"></div>;
  //   });

  return (
    <div className="countries-container">
      {Array.from({ length: 12 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
};

export default CountriesListShimmer;
