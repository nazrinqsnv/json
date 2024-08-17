import React, { useState, useEffect } from "react";
import "./css/Allrecipes.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";
import Breakmain from "./Breakmain";

function Vegan() {
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
            <h2>Vegetarian Recipes</h2>
            <p>
              If you're on the hunt to find vegetarian recipes, you've come to
              the right people. Vegetarian meals don't have to be lifeless and
              bland - vegetables, with a bit of love, have infinitely delicious
              potential. Here at Twisted, we believe it's probably common sense
              to not eat meat for ..
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

export default Vegan;
