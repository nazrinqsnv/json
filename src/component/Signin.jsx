import React, { useState } from "react";
import "./css/Signin.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

function Signin() {
  const [inputFocused, setInputFocused] = useState(false);
  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setInputFocused(false);
    }
  };
  return (
    <div>
      <div className="all-sign">
        <div className="sgn-photo1">
          <img src="/img/onboarding-shape-1.svg" alt="" />
          <h2>Exclusive recipes & access to new shows</h2>
        </div>
        <div className="sgn-photo2">
          <img src="/img/Onboarding-square.svg" alt="" />
          <h2>Save your favourite recipes, episodes & chefs</h2>
        </div>

        <div className="all-sign-search">
          <div className="sign-search">
            <h2>Twisted Recipes</h2>
            <div className="all-s-carousel">
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
                <SwiperSlide>
                  <div className="all-sgn-photo">
                    <div className="sgn-photo">
                      <img src="/img/onboarding-shape-1.svg" alt="" />
                      <h2>Exclusive recipes & access to new shows</h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="all-sgn-photo">
                    <div className="sgn-photo">
                      <img src="/img/Onboarding-square.svg" alt="" />
                      <h2>Save your favourite recipes, episodes & chefs</h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="all-sgn-photo">
                    <div className="sgn-photo">
                      <img src="/img/Onboarding-green.svg" alt="" />
                      <h2>Exclusive recipes & access to new shows</h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="all-sgn-photo">
                    <div className="sgn-photo">
                      <img src="/img/onboarding-shape-4.svg" alt="" />
                      <h2>Save your favourite recipes, episodes & chefs</h2>
                    </div>
                  </div>
                </SwiperSlide>
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
            <div className="all-s-p">
              <div className="search-place">
              <div className="sign-a">
                <label htmlFor="password">Email Address:</label>
                <div className="sign-container">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className={`sign-input ${inputFocused ? "focused" : ""}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="sign-a">
                <label htmlFor="password">Password:</label>
                <div className="sign-container">
                  <input
                    type="text"
                    placeholder="Password"
                    className={`sign-input ${inputFocused ? "focused" : ""}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="keep flex">
                <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
                <h3 className="mt-[10px] pl-[6px]">keep me sign in</h3>
              </div>
              <button className="keen mt-6">Sign in</button>
            </div>
            </div>
            
            <div className="sign-txt">
              <h2>Don't have an account?</h2>
              <div className="more">
                <a href="/signup">Sign up with your email</a>
              </div>
            </div>
          </div>
        </div>

        <div className="sgn-photo3">
          <img src="/img/Onboarding-green.svg" alt="" />
          <h2>Exclusive recipes & access to new shows</h2>
        </div>
        <div className="sgn-photo4">
          <img src="/img/onboarding-shape-4.svg" alt="" />
          <h2>Save your favourite recipes, episodes & chefs</h2>
        </div>
      </div>
    </div>
  );
}

export default Signin;
