import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";

import "../css/Recipedetail.css";


function Articledetail() {
  const { all } = useParams();
  const [det, setDet] = useState({});
  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/nazrinqsnv/json/main/public/carouselData.json")
      .then((res) => res.json())
      .then((res) => setDet(res.allarticles.find((item) => item.name === all)));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(det, all);
  return (
    <div className="all-article">
      <div className="articles-head">
        <h2>{det.object}</h2>
        <div className="articles-date flex justify-between pt-8">
          <div className="ar-date flex justify-between gap-12">
            <img src="/img/twistedplaceholder.svg" alt="" />
            <h3>By Twisted</h3>
            <h2>{det.date}</h2>
            <div className="life-book flex">
                <MdOutlineWatchLater size={30} color="gray" />
                <p className="pl-[5px]">{det.hour}</p>
              </div>
          </div>
          <a href="/sign" className="txt3">
            <h3>Save</h3>
            <span>+</span>
          </a>
        </div>
      </div>
      <div className="content">
        {det.content?.map((elem, index) => (
        <div className="all-content">
          <div className="content-photo">
            <img src={elem.image} alt="" />
          </div>
          
          <h2>{elem.text}</h2>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default Articledetail;
