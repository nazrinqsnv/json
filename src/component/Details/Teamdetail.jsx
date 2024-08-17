import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";

function Teamdetail() {
  const { all } = useParams();
  const [det, setDet] = useState({});
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/nazrinqsnv/json/main/public/carouselData.json"
    )
      .then((res) => res.json())
      .then((res) => setDet(res.allstuff.find((item) => item.name === all)));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="chef-about bg-[#5d7cfc] text-[white]">
        <div className="chef-photo">
          <div
            style={{ backgroundImage: `url(${det.image})` }}
            className="chef-img"
          ></div>
        </div>

        <div className="chef-txt">
          <div className="chef-header">
            <h2>{det.name}</h2>
          </div>
          <p>{det.about}</p>
        </div>
      </div>
      <div className="all-chef text-[#131a33] pt-8">
        <h2>More recipes from {det.name}</h2>
        <div className="other-card">
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
            breakpoints={{
              1199: {
                slidesPerView: 3,
              },
            }}
          >
            <div className="other-rec">
              {det.meals?.map((item, index) => (
                <SwiperSlide>
                  <div key={index} className="rec-card">
                    <div
                      style={{ backgroundImage: `url(${item.src})` }}
                      className="other-img"
                    ></div>

                    <h2>{item.object}</h2>

                    <div className="small-txt text-[20px]">
                      <div className="txt">
                        <MdOutlineWatchLater className="txt2" />
                        <h3>{item.hour}</h3>
                      </div>
                      <div className="txt">
                        <GoPeople className="txt2" />
                        <h3>{item.person}</h3>
                      </div>
                      <a href="/sign" className="txt3 ">
                        <h3>Save</h3>
                        <span>+</span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="move-card m-[50px]">
              <img
                src="/img/blackarr1.svg"
                alt="arrow"
                className="swiper-prev"
              />
              <div className="custom-pagination"></div>
              <img
                src="/img/blackarr1.svg"
                alt="arrow "
                className="swiper-next rotate-180"
              />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Teamdetail;
