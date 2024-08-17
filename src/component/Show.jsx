import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoPeople } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import "swiper/css/pagination";
import "./css/Team.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Show() {
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
    <>
      <div className="allshow-head">
        <div className="team-about">
          <div className="stove">
            <img src="/img/indian-spice-box.svg" alt="" className="w-[190px]" />
          </div>
          <div className="allshow-txt">
            <h2>Twisted Shows</h2>
          </div>
          <div className="pan">
            <img src="/img/potato-ricer.svg" alt="" className="w-[190px]" />
          </div>
        </div>

        <div className="all-show">
          <div style={{ width: "95%" }}>
            <Swiper
              slidesPerView={1}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              pagination={{
                el: ".show-pagination",
                clickable: true,
              }}
              loop={true}
            >
              {data.show?.map((elem, index) => (
                <SwiperSlide>
                  <div className="">
                    <div
                      style={{
                        backgroundImage: `linear-gradient(0deg, rgba(22,26,47,1) 12%, rgba(255,255,255,0) 30%),url(${elem.src})`,
                      }}
                      className="show-cont"
                      key={index}
                    ></div>
                    <div className="show-txt">
                      <h3>{elem.name}</h3>
                      <h2>{elem.name}</h2>
                      <p>{elem.object}</p>
                      <div className="btns">
                        <button className="keen">keen</button>
                        <h3 className="more">see all recipes</h3>
                      </div>
                      <div className="twis">
                        <img src="./img/twistedimg.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="move-feat">
                <img
                  src="./img/rightarrowwhite.svg"
                  alt="arrow"
                  className="swiper-prev rotate-180 w-[20px]"
                />
                <div className="show-pagination"></div>
                <img
                  src="./img/rightarrowwhite.svg"
                  alt="arrow "
                  className="swiper-next w-[20px]"
                />
              </div>
            </Swiper>
          </div>
        </div>
        <div className="p-name">
          <h2>Popular Shows</h2>
        </div>
        <div className="show-participe">
          {data.popshow?.map((elem, index) => (
            <div key={index} className="p-card">
              <div
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(22,26,47,1) 3%, rgba(255,255,255,0) 40%),url(${elem.src})`,
                }}
                className="pop-img"
              ></div>
              <h2 className="show-h2">{elem.name}</h2>

              <div className="small-txt gap-20 flex-wrap">
                <h2 className="text-gray-400 text-[20px] font-bold">
                  {elem.season}
                </h2>
                <a href="/sign" className="txt4">
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
              el: ".show-pagination",
              clickable: true,
            }}
            loop={true}
          >
            {data.showfeat?.map((elem, index) => (
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
                        <a href="/sign" className="txt3">
                          <h3>Save</h3>
                          <span>+</span>
                        </a>
                      </div>
                      <p className="pb-9">{elem.about}</p>
                        <button className="keen">keen</button>
                      <h3 className="more">all recipes</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="move-feat m-[30px]">
                <img
                  src="./img/rightarrowwhite.svg"
                  alt="arrow"
                  className="swiper-prev rotate-180 w-[20px]"
                />
                <div className="show-pagination"></div>
                <img
                  src="./img/rightarrowwhite.svg"
                  alt="arrow "
                  className="swiper-next w-[20px]"
                />
              </div>
          </Swiper>
        </div>

        <div className="c-name">
          <div className="ser-txt flex">
            <h2>Bake In</h2>
            <p>17 EPISODE 2 SEASONS</p>
          </div>
          <div className="more">
            <a href="">see all recipes</a>
          </div>
        </div>
        <div className="series">
          <div className="ser-info">
            <h2>
              Join Tara as she takes you on a whistle stop tour through some of
              the worlds most famous baking recipes. Watch now on Twisted
            </h2>
            <div className="flex">
              <button className="keen">keen</button>
              <a href="/sign" className="txt4">
                <h3>Save</h3>
                <span>+</span>
              </a>
            </div>
          </div>
          <div className="show-participe">
            {data.bake?.map((elem, index) => (
              <div key={index} className="p-card">
                <div
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(22,26,47,1) 3%, rgba(255,255,255,0) 40%),url(${elem.src})`,
                  }}
                  className="ser-img"
                ></div>
                <h2 className="show-h2">{elem.name}</h2>

                <div className="small-txt ">
                  <h2 className="text-gray-400 text-[20px] font-bold">
                    {elem.season}
                  </h2>
                  <a href="/sign" className="txt4">
                    <h3>Save</h3>
                    <span>+</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="c-name">
          <div className="ser-txt flex">
            <h2>Shelf Life</h2>
            <p>13 EPISODE 2 SEASONS</p>
          </div>
          <div className="more">
            <a href="">see all recipes</a>
          </div>
        </div>
        <div className="series">
          <div className="ser-info">
            <h2>
              Tom Jackson sets up a lockdown kitchen studio in his tiny flat and
              digs around the darkest cornest of his cupboards to unearth some
              delicious, inspiring meals for those days where you got nothin'.
            </h2>
            <div className="flex">
              <button className="keen">keen</button>
              <a href="/sign" className="txt4">
                <h3>Save</h3>
                <span>+</span>
              </a>
            </div>
          </div>
          <div className="show-participe">
            {data.shelf?.map((elem, index) => (
              <div key={index} className="p-card">
                <div
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(22,26,47,1) 3%, rgba(255,255,255,0) 40%),url(${elem.src})`,
                  }}
                  className="ser-img"
                ></div>
                <h2 className="show-h2">{elem.name}</h2>

                <div className="small-txt ">
                  <h2 className="text-gray-400 text-[20px] font-bold">
                    {elem.season}
                  </h2>
                  <a href="/sign" className="txt4">
                    <h3>Save</h3>
                    <span>+</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="c-name">
          <div className="ser-txt flex">
            <h2>Hangin’ With</h2>
            <p>8 EPISODE 1 SEASONS</p>
          </div>
          <div className="more">
            <a href="">see all recipes</a>
          </div>
        </div>
        <div className="series">
          <div className="ser-info">
            <h2>
              A show that celebrates hangover food with your favourite celebs.
              We share drunken stories and hangover cures with the help of our
              Twisted Chefs
            </h2>
            <div className="flex">
              <button className="keen">keen</button>
              <a href="/sign" className="txt4">
                <h3>Save</h3>
                <span>+</span>
              </a>
            </div>
          </div>
          <div className="show-participe">
            {data.hang?.map((elem, index) => (
              <div key={index} className="p-card">
                <div
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(22,26,47,1) 3%, rgba(255,255,255,0) 40%),url(${elem.src})`,
                  }}
                  className="ser-img"
                ></div>
                <h2 className="show-h2">{elem.name}</h2>

                <div className="small-txt ">
                  <h2 className="text-gray-400 text-[20px] font-bold">
                    {elem.season}
                  </h2>
                  <a href="/sign" className="txt4">
                    <h3>Save</h3>
                    <span>+</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-name">
          <h2>All our shows</h2>
        </div>
        <div className="show-participe p-[70px]">
          {data.allshow?.map((elem, index) => (
            <div key={index} className="p-card">
              <div
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(22,26,47,1) 3%, rgba(255,255,255,0) 40%),url(${elem.src})`,
                }}
                className="pop-img"
              ></div>
              <h2 className="show-h2">{elem.name}</h2>

              <div className="small-txt gap-20 flex-wrap">
                <h2 className="text-gray-400 text-[20px] font-bold">
                  {elem.season}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Show;
