import React, { useState, useEffect } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
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
function Opinion() {
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
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 1);
  };
  return (
    <>
      <div className="recipe-head">
        <div className="stove">
          <img src="/img/leftstroke.svg" alt="leftstrk" />
          <img
            src="/img/13-chilli-oil-1-vector.svg"
            alt="stove"
            className="absolute top-[190px] left-[30px]"
          />
        </div>
        <div className="recipe-loc">
          <div className="recipe-search">
            <h2>Twisted Opinion</h2>
            <div className="flex justify-center pt-[30px]">
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
            src="/img/16-sugar-3-vector.svg"
            alt="stove"
            className="absolute w-[140px] top-[160px] right-[40px]"
          />
        </div>
      </div>
      <SearchResult result={result}/>
      <div className="featuring">
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
          {data.trending?.map((elem, index) => (
            <SwiperSlide>
              <div className="feat-slider" key={index}>
                <div className="feat-head">
                  <div
                    style={{ backgroundImage: `url(${elem.src})` }}
                    className="feat-img"
                  ></div>
                </div>
                <div className="feat-txt text-center">
                  <div className="small-feat">
                    <h2>{elem.object}</h2>
                    <div className="small-txt items-center justify-center pb-6">
                      <div className="life-book flex gap-3">
                        <img
                          src="./img/book.avif"
                          className="w-[30px] h-[30px]"
                        />
                        <p className="pl-[5px]">
                          <b>{elem.hour}</b>
                        </p>
                      </div>
                      <a href="/sign" className="txt3">
                        <h3>Save</h3>
                        <span>+</span>
                      </a>
                    </div>
                    <p className="pb-9">{elem.about}</p>
                    <Link to={`/articles/${elem.name}`}>
                      <button className="keen">keen</button>
                    </Link>
                    <h3 className="more">
                      <a href="/allarticles">all articles</a>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="move-feat m-[50px]">
            <img src="/img/blackarr1.svg" alt="arrow" className="swiper-prev" />
            <div className="custom-pagination"></div>
            <img
              src="/img/blackarr1.svg"
              alt="arrow "
              className="swiper-next rotate-180"
            />
          </div>
        </Swiper>
      </div>
      <div className="life">
        {data.allnews?.map((elem, index) => (
          <div key={index} className="life-card">
            <Link to={`/articles/${elem.name}`}>
              <div
                style={{ backgroundImage: `url(${elem.src})` }}
                className="life-img"
              ></div>
            </Link>
            <h2 className="life-h2">{elem.object.substring(0, 70)}</h2>
            <div className="life-footer">
              <div className="life-book flex">
                <MdOutlineWatchLater size={30} color="gray" />
                <p className="pl-[5px]">{elem.hour}</p>
              </div>
              <a href="/sign" className="txt3">
                <h3>Save</h3>
                <span>+</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="slide">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          breakpoints={{
            744: {
              slidesPerView: 2,
            },
            1199: {
              slidesPerView: 3,
            },
            1613: {
              slidesPerView: 4,
            },
          }}
          className="slide-swiper"
        >
          {data.slide?.map((elem, index) => (
            <SwiperSlide>
              <div key={index} className="slide-card flex">
                <div className="all-s-img">
                  <Link to={`/articles/${elem.name}`}>
                    <div
                      style={{ backgroundImage: `url(${elem.src})` }}
                      className="s-img"
                    ></div>
                  </Link>
                </div>

                <div className="s-txt">
                  <h2>{elem.object.substring(0, 37)}...</h2>
                  <a href="/sign" className="txt3 justify-end pt-6">
                    <h3>Save</h3>
                    <span>+</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="move-slide">
            <img
              src="./img/smallarrowwhite.svg"
              alt="arrow"
              className="swiper-button-prev"
            />
            <img
              src="./img/smallarrowwhite.svg"
              alt="arrow "
              className="swiper-button-next rotate-180"
            />
          </div>
        </Swiper>
      </div>
      {data.news?.slice(0, visibleItems).map((elem, index) => (
        <div>
          <div className="life">
            {data.allnews?.map((elem, index) => (
              <div key={index} className="life-card">
                <Link to={`/articles/${elem.name}`}>
                  <div
                    style={{ backgroundImage: `url(${elem.src})` }}
                    className="life-img"
                  ></div>
                </Link>
                <h2 className="life-h2">{elem.object.substring(0, 70)}</h2>
                <div className="life-footer">
                  <div className="life-book flex">
                    <MdOutlineWatchLater size={30} color="gray" />
                    <p className="pl-[5px]">{elem.hour}</p>
                  </div>
                  <a href="/sign" className="txt3">
                    <h3>Save</h3>
                    <span>+</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="f-card">
            {elem.gridf?.map((elem, ind) => (
              <div className="card" key={ind}>
                <Link to={`/recipes/${elem.name}`}>
                  <div
                    style={{ backgroundImage: `url(${elem.src})` }}
                    className="f-img"
                  ></div>
                </Link>
                <h2 className="life-h2">{elem.object.substring(0, 70)}</h2>
                <div className="life-footer">
                  <div className="life-book flex">
                    <MdOutlineWatchLater size={30} color="gray" />
                    <p className="pl-[5px]">{elem.hour}</p>
                  </div>
                  <a href="/sign" className="txt3">
                    <h3>Save</h3>
                    <span>+</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center pb-4">
        {visibleItems < data.news?.length && (
          <button className="keen" onClick={loadMore}>
            keen
          </button>
        )}
      </div>
    </>
  );
}

export default Opinion;
