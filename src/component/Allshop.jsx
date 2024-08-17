import React from "react";
import "./css/Team.css";

function Allshop() {
  return (
    <>
      <div className="shop-head">
        <div className="shop-img">
          <img
            src="/img/cookbook-in-lifestyle_1800x1800-1.jpeg"
            alt="cookbook-in-lifestyle_1800x1800-1"
          />
        </div>
        <div className="shop-txt">
          <div className="new-txt">
            <p>Twisted:A Cookbook</p>
            <h1>Unserious food tastes seriously good.</h1>
            <div className="flex justify-center pt-7">
              <div className="new-o">
                <h2>Now only </h2>
                <img src="/img/penta.svg" alt="" />
                <h3>£19</h3>
              </div>
            </div>
            <a
              href="https://www.amazon.co.uk/Twisted-Cookbook-Unserious-Delicious-Occasion/dp/1529394848/"
              className="more"
            >
              take a look
            </a>
          </div>
        </div>
      </div>
      <div className="team-about">
        <div className="stove">
          <img src="/img/vectorwave.svg" alt="" className="w-[350px]" />
        </div>

        <div className="team-txt">
          <div className="master">
            <h3>Masterful Cocktails</h3>
          <h2>
            Bottled in London, get our four bar-quality cocktails delivered to
            your door. Enjoy our cocktails indoors or outdoors with a few of
            your favourite people. Perfect for picnics in the park, dinner in
            the garden or a good old-fashioned date night at home.
          </h2>
          </div>
          
        </div>
        <div className="pan relative bottom-[200px]">
          <img src="/img/star.svg" alt="" className="w-[450px]" />
        </div>
      </div>
    </>
  );
}

export default Allshop;
