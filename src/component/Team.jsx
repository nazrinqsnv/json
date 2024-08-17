import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "./css/Team.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

function Team() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/nazrinqsnv/json/main/public/carouselData.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="team-header">
        <img src="/img/team-photo-header-final.webp" alt="" />
      </div>
      <div className="team-about">
        <div className="stove">
          <img src="/img/vectorwave.svg" alt="" className="w-[350px]" />
        </div>

        <div className="team-txt">
          <h2>
            Twisted is a UK-based collective of cooks, videographers and writers
            that are passionate about reminding the world that cooking should be
            outrageous fun. The Twisted team has changed the way we look at food
            for the better.
          </h2>
        </div>
        <div className="pan relative bottom-[200px]">
          <img src="/img/star.svg" alt="" className="w-[450px]" />
        </div>
      </div>
      <div className="team-h">Chefs</div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        loop={true}
        breakpoints={{
          1199: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="life ">
          {data.chefs?.map((elem, index) => (
            <SwiperSlide>
              <div key={index} className="life-card p-[30px]">
                <Link to={`/team/${elem.name}`}>
                  <div
                    style={{ backgroundImage: `url(${elem.image})` }}
                    className="life-img"
                  ></div>
                </Link>
                <h2 className="life-h2">{elem.name}</h2>
                <div className="life-footer">
                  <a href="/sign" className="txt3">
                    <h3>Save</h3>
                    <span>+</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="move-card">
          <img src="/img/blackarr1.svg" alt="arrow" className="swiper-prev" />
          <div className="custom-pagination"></div>
          <img
            src="/img/blackarr1.svg"
            alt="arrow "
            className="swiper-next rotate-180"
          />
        </div>
      </Swiper>
      <div className="team-h">
        <a href="#videog">Videographers</a>
      </div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        loop={true}
        breakpoints={{
          1199: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="life ">
          {data.videog?.map((elem, index) => (
            <SwiperSlide>
              <div key={index} className="life-card p-[30px]">
                <Link to={`/team/${elem.name}`}>
                  <div
                    style={{ backgroundImage: `url(${elem.image})` }}
                    className="life-img"
                  ></div>
                </Link>
                <h2 className="life-h2">{elem.name}</h2>
                <div className="life-footer">
                  <a href="/sign" className="txt3">
                    <h3>Save</h3>
                    <span>+</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="move-card">
          <img src="/img/blackarr1.svg" alt="arrow" className="swiper-prev" />
          <div className="custom-pagination"></div>
          <img
            src="/img/blackarr1.svg"
            alt="arrow "
            className="swiper-next rotate-180"
          />
        </div>
      </Swiper>
      <div className="team-h">Chefs</div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        loop={true}
        breakpoints={{
          1199: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="life ">
          {data.writer?.map((elem, index) => (
            <SwiperSlide>
              <div key={index} className="life-card p-[30px]">
                <Link to={`/team/${elem.name}`}>
                  <div
                    style={{ backgroundImage: `url(${elem.image})` }}
                    className="life-img"
                  ></div>
                </Link>
                <h2 className="life-h2">{elem.name}</h2>
                <div className="life-footer">
                  <a href="/sign" className="txt3">
                    <h3>Save</h3>
                    <span>+</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="move-card">
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
  );
}

export default Team;
