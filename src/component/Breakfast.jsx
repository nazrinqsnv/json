import React, { useState, useEffect } from "react";
import "./css/Allrecipes.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Searchbar from "./Searchbar";
import Breakmain from "./Breakmain";
import SearchResult from "./SearchResult";
function Breakfast() {
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(1); 
  const [result, setResult] = useState([]);
  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/nazrinqsnv/json/main/public/carouselData.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="recipe-head">
        <div className="stove">
          <img src="/img/leftstroke.svg" alt="leftstrk" />
          <img
            src="/img/oil.svg"
            alt="stove"
            className="absolute top-[190px] left-[30px]"
          />
        </div>
        <div className="recipe-loc">
          <div className="recipe-search">
            <h2>Breakfast Recipes</h2>
            <p className="pt-[30px]">
              Breakfast is often left unfairly on the sidelines - a meal
              neglected and degraded by nasty grey cereal. We at Twisted have
              come to the rescue with some stunning ideas to help liven your
              breakfast recipes up a bit. Breakfast doesn't have to be
              complicated to be good - lots of our..
            </p>
            <div className="flex justify-center">
              <div className="search-container">
              <Searchbar setResult={setResult}/>
                <button className="search-button">
                  <img src="/img/searchIconRed.svg" alt="Search" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pan">
          <img src="/img/rightstroke.svg" alt="leftstrk" />
          <img
            src="/img/whisk.svg"
            alt="stove"
            className="absolute w-[83px] top-[160px] right-[40px]"
          />
        </div>
      </div>
      <SearchResult result={result}/>
      <Breakmain />
    </>
  );
}

export default Breakfast;
