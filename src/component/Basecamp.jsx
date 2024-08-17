import React, { useState, useEffect } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoPeople } from "react-icons/go";
import "./css/Allrecipes.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";

function Basecamp() {
  const [data, setData] = useState([]);
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
      <div className="base-head overflow-hidden">
        <div className="base-photo flex justify-between">
          <div className="stove">
            <img
              src="/img/sun.svg"
              alt="leftstrk"
              className="w-[250px] h-[190px] relative bottom-[89px]"
            />
            <img
              src="/img/mountains.svg"
              alt="stove"
              className="w-[352] h-[360] relative top-[82px]"
            />
          </div>
          <div className="recipe-loc">
            <div className="recipe-search">
              <h2>Basecamp</h2>
              <p className="pt-[30px]">
                Looking for some recipe inspiration? You found it. Browse the
                complete list of Twisted recipes, delicious meals and dinner
                recipe ideas from our kitchen, to yours. Including easy dinner
                ideas fit for every palate, dietary requirement and taste. Fire
                up your oven, light the grill and set the wok to stun with the
                full list of Twisted recipes right here.
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
            <img
              src="/img/flags.svg"
              alt="leftstrk"
              className="flags w-[480px] h-[200px] relative bottom-[51px] left-[120px]"
            />
            <img
              src="/img/teapot.svg"
              alt="stove"
              className="w-[480px] h-[200px] relative top-[49px] left-[150px]"
            />
          </div>
        </div>
      </div>
      <SearchResult result={result}/>
      <div className="carousel">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          loop={true}
        >
          {data.basehead?.map((item, index) => (
            <SwiperSlide>
              <div className="all-c" key={index}>
                <div className="slide-c">
                  <div
                    style={{ backgroundImage: `url(${item.src})` }}
                    className="photo"
                  ></div>
                  <div className="slide-txt">
                    <h2>{item.object}</h2>
                    <p className="p-[10px]">{item.about}</p>
                    <div className="small-txt">
                      <div className="txt">
                        <MdOutlineWatchLater className="txt2" />
                        <h3 className="pl-[3px]"><b>{item.hour}</b></h3>
                      </div>
                      <div className="txt">
                        <GoPeople className="txt2" />
                        <h3><b>{item.person}</b></h3>
                      </div>
                      <a href="/sign" className="txt3">
                        <h3>Save</h3>
                        <span>+</span>
                      </a>
                    </div>
                    <Link to={`/recipes/${item.name}`}>
                      <button className="keen">keen</button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="move-card">
            <img
              src="./img/blackarr1.svg"
              alt="arrow"
              className="swiper-prev"
            />
            <div className="custom-pagination"></div>
            <img
              src="./img/blackarr1.svg"
              alt="arrow "
              className="swiper-next rotate-180"
            />
          </div>
        </Swiper>
      </div>
      <div className="c-name">
        <h2>Latest recipes</h2>
        <h3 className="more">
          <a href="/allrecipe">all recipes</a>
        </h3>
      </div>

      <div className="life">
        {data.allsandw?.map((elem, index) => (
          <div key={index} className="life-card">
            <Link to={`/recipes/${elem.name}`}>
              <div
                style={{ backgroundImage: `url(${elem.src})` }}
                className="life-img"
              ></div>
            </Link>
            <h2 className="life-h2">{elem.object.substring(0, 70)}</h2>
            <div className="life-footer">
              <div className="life-book flex">
                <MdOutlineWatchLater size={27} color="gray" />
                <p>
                  <b>{elem.hour}</b>
                </p>
              </div>
              <div className="txt">
                <GoPeople size={27} color="gray" />
                <h3 className="text-[gray] text-[19px] pl-[6px]">
                  <b>{elem.person}</b>
                </h3>
              </div>
              <a href="/sign" className="txt3">
                <h3>Save</h3>
                <span>+</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="c-name">
        <h2>Chicken</h2>
        <h3 className="more">see all recipes</h3>
      </div>
      <div className="life">
        {data.allchic?.map((elem, index) => (
          <div key={index} className="life-card">
            <Link to={`/recipes/${elem.name}`}>
              <div
                style={{ backgroundImage: `url(${elem.src})` }}
                className="life-img"
              ></div>
            </Link>
            <h2 className="life-h2">{elem.object.substring(0, 70)}</h2>
            <div className="life-footer">
              <div className="life-book flex">
                <MdOutlineWatchLater size={27} color="gray" />
                <p>
                  <b>{elem.hour}</b>
                </p>
              </div>
              <div className="txt">
                <GoPeople size={27} color="gray" />
                <h3 className="text-[gray] text-[19px] pl-[6px]">
                  <b>{elem.person}</b>
                </h3>
              </div>
              <a href="/sign" className="txt3">
                <h3>Save</h3>
                <span>+</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Basecamp;
