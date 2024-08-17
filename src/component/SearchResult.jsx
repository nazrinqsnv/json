import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoPeople } from "react-icons/go";

function SearchResult({ result }) {
  console.log(result);

  return (
    <div id="result">
      <div className="life grid ">
        {result?.map((item, id) => {
          return (
            <div key={id} className="life-card">
              <Link to={`/recipes/${item.name}`}>
                <div
                  style={{ backgroundImage: `url(${item.src})` }}
                  className="life-img"
                ></div>
              </Link>
              <h2 className="life-h2">{item.object.substring(0, 70)}</h2>
              <div className="life-footer">
                <div className="life-book flex">
                  <MdOutlineWatchLater size={27} color="gray" />
                  <p>
                    <b>{item.hour}</b>
                  </p>
                </div>
                <div className="txt">
                  <GoPeople size={27} color="gray" />
                  <h3 className="text-[gray] text-[19px] pl-[6px]">
                    <b>{item.person}</b>
                  </h3>
                </div>
                <a href="/sign" className="txt3">
                  <h3>Save</h3>
                  <span>+</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
