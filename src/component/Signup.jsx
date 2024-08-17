import React, { useState } from "react";
import "./css/Signin.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

function Signup() {
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

          <div className="search-place">
            <div className="sign-a">
              <label>First Name:</label>
              <div className="sign-container">
                <input
                  type="text"
                  placeholder="First Name"
                  className={`sign-input ${inputFocused ? "focused" : ""}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="sign-a">
              <label>Last Name:</label>
              <div className="sign-container">
                <input
                  type="text"
                  placeholder="Last Name"
                  className={`sign-input ${inputFocused ? "focused" : ""}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="sign-a">
              <label>Email Address:</label>
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
              <label>Password:</label>
              <div className="sign-container">
                <input
                  type="text"
                  placeholder="Password"
                  className={`sign-input ${inputFocused ? "focused" : ""}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <h3>Passwords must be at least 8 characters long, contain one upper case letter and one number.</h3>
            </div>
            <div className="sign-a">
              <label>Confirm Password:</label>
              <div className="sign-container">
                <input
                  type="text"
                  placeholder="Confirm Password:"
                  className={`sign-input ${inputFocused ? "focused" : ""}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <h3>Please read the <a className="text-[#f7374a]" href="/privacy">Twisted Privacy Policy</a> to find out how we handle your account data.</h3>
            </div>
            <div className="keep flex">
                <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
                <h3 className="mt-[10px] pl-[6px]"> I would love to receive Twisted promotional newsletters, exclusive recipes and eventas</h3>
              </div>
              <div className="keep flex">
                <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
                <h3 className="mt-[10px] pl-[6px]">I have read Twisted's <a href="/delivery" className="text-[red]">Terms and Conditions</a></h3>
              </div>
            <button className="keen mt-6">Sign in</button>
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
  )
}

export default Signup