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

function Sandwmain() {
    const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(1);
  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/nazrinqsnv/json/main/public/carouselData.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  return (
    <>
    <h2 className="rnd-txt1">featuring</h2>
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
        {data.sandwhead?.map((elem, index) => (
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
                    <div className="txt">
                      <MdOutlineWatchLater className="txt2" />
                      <h3 className="pl-[4px]">
                        <b>{elem.hour}</b>
                      </h3>
                    </div>
                    <div className="txt">
                      <GoPeople className="txt2 " />
                      <h3 className="pt-[2px] pl-[4px]">
                        <b>{elem.person}</b>
                      </h3>
                    </div>
                    <a href="/sign" className="txt3">
                      <h3>Save</h3>
                      <span>+</span>
                    </a>
                  </div>
                  <p className="pb-9">{elem.about}</p>
                  <Link to={`/recipes/${elem.name}`}>
                    <button className="keen">keen</button>
                  </Link>
                  <h3 className="more">
                    <a href="/allrecipe">all recipes</a>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="move-feat mt-[50px]">
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

    {data.sandwiches?.slice(0, visibleItems).map((elem, index) => (
      <div>
        <div className="life">
          {elem.gridt?.map((elem, index) => (
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
      </div>
    ))}
    <div className="flex justify-center pb-4">
      {visibleItems < data.sandwiches?.length && (
        <button className="keen" onClick={loadMore}>
          load more
        </button>
      )}
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
  </>
  )
}

export default Sandwmain