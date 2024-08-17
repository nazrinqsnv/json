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
function Allrecipes() {
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
      <div className="recipe-head">
        <div className="stove">
          <img src="/img/leftstroke.svg" alt="leftstrk" />
          <img
            src="/img/stove.svg"
            alt="stove"
            className="absolute top-[155px]"
          />
        </div>
        <div className="recipe-loc">
          <div className="recipe-search">
            <h2>Twisted Recipes</h2>
            <p className="pt-[30px]">
              Need some recipe inspiration? Browse our complete list of Twisted
              recipes, delicious meals and dinner ideas from our kitchen to
              yours, to fit every palate, dietary requirement and taste.
            </p>
            <div className="flex justify-center">
              <div className="search-container">
                <Searchbar setResult={setResult} />
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
            src="/img/pot.svg"
            alt="stove"
            className="absolute w-[183px] top-[260px] right-[10px]"
          />
        </div>
      </div>
      <SearchResult result={result} />
      <div className="c-name">
        <h2>Sandwiches</h2>
        <h3 className="more">see all recipes</h3>
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
          <SearchResult />
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
                        <p>
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
        <h2>Dinner Recipes</h2>
        <h3 className="more">see all recipes</h3>
      </div>
      <div className="life">
        {data.alldinner?.map((elem, index) => (
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
                        <p>
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
        <h2>Dessert</h2>
        <h3 className="more">see all recipes</h3>
      </div>
      <div className="life">
        {data.alldessert?.map((elem, index) => (
          <div key={index} className="life-card">
            <Link to={`/recipes/${elem.name}`}>
              <div
                style={{ backgroundImage: `url(${elem.src})` }}
                className="life-img"
              ></div>
            </Link>
            <h2 className="life-h2">{elem.object.substring(0, 70)}</h2>
            <div className="life-footer">
            <div className="life-book flex gap-3">
                        <img
                          src="./img/book.avif"
                          className="w-[30px] h-[30px]"
                        />
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

export default Allrecipes;
