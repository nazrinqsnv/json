import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiArrowUturnRight } from "react-icons/hi2";
import "../css/Recipedetail.css";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import { Link } from "react-router-dom";

function Recipedetails() {
  const { all } = useParams();
  const [det, setDet] = useState({});
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/nazrinqsnv/json/main/public/carouselData.json")
      .then((res) => res.json())
      .then((res) => setDet(res.allrecipes.find((item) => item.name === all)));
  };
  useEffect(() => {
    fetchData();
    scrollTo({ top: 0 });
  }, [all]);
  console.log(det, all);
  return (
    <>
      <div className="all-about">
        <div
          style={{ backgroundImage: `url(${det.src})` }}
          className="about-photo"
        ></div>
        <div className="about">
          <div className="about-txt">
            <h2 className="pb-[40px]">{det.object}</h2>
            <p className="pb-[30px]">{det.about}</p>
            <div className="flex justify-center gap-[30px] pb-[60px]">
              <p>
                done <b>{det.hour}</b>
              </p>
              <p>
                Serves <b>{det.person}</b>
              </p>
            </div>
            <div className="all-a">
              <div className="all-author">
                <HiArrowUturnRight color="#f7374a" size={30} />
                <a href="/sign" className="txt3">
                  <h3>Save</h3>
                  <span>+</span>
                </a>
                <div className="author flex">
                  <div
                    style={{ backgroundImage: `url(${det.author})` }}
                    className="a-img"
                  ></div>
                  <p className="p-[7px]">
                    Dish by{" "}
                    <Link to={`/team/${det.authorname}`}>{det.authorname}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cook">
        <div className="ingr">
          <div className="ingr-head flex justify-between">
            <h2>İngredients</h2>
            <img src="/img/rightarrowwhite.svg" alt="" className="w-[24px]" />
          </div>
          <div className="all-nutr">
            {det.ingredients?.map((elem, index) => (
              <div className="nutr-txt">
                <h2>{elem.level}</h2>
                <div className="nutrition">
                  <span>{elem.quantity}</span>
                  <span>{elem.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="method">
          {det.method?.map((elem, index) => (
            <div>
              <p>{elem.start}</p>
              <h2 className="text-[36px] pt-6">{elem.head}</h2>
              <div className="steps">
                <div className="flex gap-[10px]">
                  <h2>{elem.number}</h2>
                  <p>{elem.step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rating">
        <div className="rating-cont">
          <h2>What do you think of the recipe?</h2>
          <div className="all-rate">
            <div className="stars flex">
              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                    />
                    <FaStar
                      className="star"
                      size={50}
                      color={
                        currentRating <= (hover || rating)
                          ? "#0d154c"
                          : "lightgray"
                      }
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <h3 className="more">
            <a href="/sign">save recipes</a>
          </h3>
        </div>
      </div>
      <div className="chef">
        <div className="chef-about">
          <div className="chef-photo">
            <div
              style={{ backgroundImage: `url(${det.author})` }}
              className="chef-img"
            ></div>
          </div>
          <Link to={`/recipes/${det.name}`} className="chef-button">
            <button>follow</button>
          </Link>
          <div className="chef-txt">
            <div className="chef-header">
              <h2>{det.authorname}</h2>
            </div>
            <p>{det.authorabout}</p>
            <h3 className="more pt-9">
              <Link to={`/team/${det.authorname}`}>read more</Link>
            </h3>
          </div>
        </div>
        <div className="other-recipes">
          <h2>More recipes from {det.authorname}</h2>
          <div className="other-card pt-[70px]">
            <Swiper
              slidesPerView={3}
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
              <div className="other-rec">
                {det.otherrecipes?.map((item, index) => (
                  <SwiperSlide>
                    <div key={index} className="rec-card">
                      <Link to={`/recipes/${item.name}`}>
                        <div
                          style={{ backgroundImage: `url(${item.src})` }}
                          className="other-img"
                        ></div>
                      </Link>
                      <h2>{item.object}</h2>
                      <div className="hashtag-footer">
                        {item.hashtags?.map((elem, index) => (
                          <div>
                            <a href="">{elem.hashtag}</a>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between pt-8">
                        <h3 className="more">
                          <Link to={`/recipes/${item.name}`}>read more</Link>
                        </h3>
                        <a href="/sign" className="txt4">
                          <h3>Save</h3>
                          <span>+</span>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              <div className="move-feat m-[50px]">
                <img
                  src="/img/rightarrowwhite.svg"
                  alt="arrow"
                  className="swiper-prev rotate-180 w-[20px]"
                />
                <div className="show-pagination"></div>
                <img
                  src="/img/rightarrowwhite.svg"
                  alt="arrow "
                  className="swiper-next w-[20px]"
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipedetails;
