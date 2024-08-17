import { useEffect, useState } from "react";
import "./css/Main.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { Link } from "react-router-dom";

function Main() {
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
          {data.slides?.map((item, index) => (
            <SwiperSlide>
              <div className="all-c" key={index}>
                <div className="slide-c">
                  <div
                    style={{ backgroundImage: `url(${item.src})` }}
                    className="photo"
                  ></div>
                  <div className="slide-txt">
                    <h2>{item.object}</h2>
                    <p>{item.about}</p>
                    <div className="small-txt">
                      <div className="txt">
                        <MdOutlineWatchLater className="txt2" />
                        <h3><b>{item.hour}</b></h3>
                      </div>
                      <div className="txt">
                        <GoPeople className="txt2" />
                        <h3 className="allc-per"><b>{item.person}</b></h3>
                      </div>
                      <a href="/sign" className="txt3">
                        <h3 className="txt-h2">Save</h3>
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
        <div className="more">
          <a href="/allrecipe">see all recipes</a>
        </div>
      </div>

      <div className="f-card">
        {data.latestrecipe?.map((elem, ind) => (
          <div className="card" key={ind}>
            <Link to={`/recipes/${elem.name}`}>
              <div
                style={{ backgroundImage: `url(${elem.src})` }}
                className="f-img"
              ></div>
            </Link>
            <h2 className="f-h2">{elem.object}</h2>
            <div className="small-txt-f text-gray-600 justify-between">
              <div className="txt">
                <MdOutlineWatchLater className="txt2" />
                <h3 className="p-[2px]"><b>{elem.hour}</b></h3>
              </div>
              <div className="txt">
                <GoPeople className="txt2 " />
                <h3 className="pt-[2px] pl-[5px]"><b>{elem.person}</b></h3>
              </div>
              <a href="/sign" className="txt3">
                <h3 className="p-[4px]">Save</h3>
                <span>+</span>
              </a>
            </div>
          </div>
        ))}
      </div>

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
          {data.featuring?.map((elem, index) => (
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
                        <h3><b>{elem.hour}</b></h3>
                      </div>
                      <div className="txt">
                        <GoPeople className="txt2 " />
                        <h3 className="p-[2px]"><b>{elem.person}</b></h3>
                      </div>
                      <a href="/sign" className="txt3">
                        <h3 className="p-[4px]">Save</h3>
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
          <div className="move-feat mt-[60px]">
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
        <h2>Lifestyle</h2>
        <div className="more">
          <a href="/allarticles">see all articles</a>
        </div>
      </div>
      <div className="life">
        {data.lifestyle?.map((elem, index) => (
          <div key={index} className="life-card">
            <div
              style={{ backgroundImage: `url(${elem.src})` }}
              className="life-img"
            ></div>
            <h2 className="life-h2">{elem.object.substring(0, 70)}</h2>
            <div className="life-footer">
              <div className="life-book flex gap-3">
                <img src="./img/book.avif" className="w-[30px] h-[30px]" />
                <p> <b>{elem.book}</b></p>
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

      <div
        style={{ backgroundImage: `url(./img/back.webp)` }}
        className="Floyd"
      >
        <div className="Floyd-txt">
          <h2>
            To hell with fashion, trends and gastronomic one-upmanship. Cooking
            and eating should be fun.
          </h2>
          <h3>Keith Floyd</h3>
        </div>
      </div>

      <div className="watch">
        <div className="show">
          <h3>watch</h3>
          <h3>our shows</h3>
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
                  <div>
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
                        <a href="/show">
                          <button className="keen">watch now</button>
                        </a>
                      <div className="pt-[17px]">
                         <a href="/show" className="more text-[20px]">
                          more episodes
                        </a>
                      </div>
                       
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
      </div>

      <div className="empty"></div>
      <div className="p-name text">
        <h2>
          Are you <b className="text-[#ffda00]">eating</b> comfortably
        </h2>
        <a href="/show" className="more">
          see all shows
        </a>
      </div>
      <div className="participe">
        {data.participe?.map((elem, index) => (
          <div key={index} className="p-card">
            <div
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(22,26,47,1) 3%, rgba(255,255,255,0) 40%),url(${elem.src})`,
              }}
              className="p-img"
            ></div>
            <h2 className="p-h2">{elem.name}</h2>

            <div className="small-txt gap-20 flex-wrap">
              <h2 className="text-gray-400 text-[20px] font-bold">
                {elem.season}
              </h2>
              <a href="/sign" className="txt3">
                <h3>Save</h3>
                <span>+</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ backgroundImage: `url(./img/back2.webp)` }}
        className="back2"
      >
        <div className="back2-txt">
          <h2>
            Twisted exists to demonstrate that unserious food tastes seriously
            good.
          </h2>

          <a href="/undefined">
            <button className="keen mt-10">about us</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
