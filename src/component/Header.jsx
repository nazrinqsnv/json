import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/Header.css";
import { IoPersonOutline } from "react-icons/io5";
import $ from "jquery";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
    setMenu(!isSearchVisible);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    $(".Navlink").on("mouseover", function () {
      $(this).find("a").css("transform", "rotate(-6deg)");
      $(this).find("img").css("transform", "rotate(90deg)");
    });

    $(".Navlink").on("mouseout", function () {
      $(this).find("a").css("transform", "rotate(0deg)");
      $(this).find("img").css("transform", "rotate(0deg)");
    });
    return () => {
      $(".Navlink").off("mouseover");
      $(".Navlink").off("mouseout");
    };
  }, []);
  return (
    <Container className="all-header flex space-x-px">
      <Navbar.Brand className="logo" href="/">
        <img src="/img/whiteTwistedLogo.svg" alt="twistedlogo" />
      </Navbar.Brand>

      <div className="all-auto">
        <Nav
          className={`me-auto ${isOpen ? "open" : ""} ${menu ? "hide" : ""}`}
        >
          <div className="dropdown">
            <div className="Navlink">
              <a href="/allrecipe">Recipes</a>
              <img
                src="/img/rightarrowwhite.svg"
                alt="arrow"
                className="arrow"
              />
            </div>
            <div className="dropdown-content">
              <div className="drop">
                <div className="grid">
                  <a href="/breakfast">Breakfast</a>
                  <a href="/sandwiches">Sandwiches</a>
                  <a href="/chicken">Chicken</a>
                  <a href="/vegan">Vegetarian</a>
                  <a href="/twistedgreen">Twisted Green</a>
                  <a href="/spicy">Spicy</a>
                  <a href="/pasta">Pasta</a>
                  <a href="/dessert">Dessert</a>
                  <a href="/cocktails">Cocktails</a>
                  <a href="/allrecipe">All Recipes</a>
                </div>
              </div>
            </div>
          </div>

          <div className="Navlink">
            <a href="/basecamp">Basecamp</a>
            <img src="/img/rightarrowwhite.svg" alt="arrow" className="arrow" />
          </div>

          <div className="dropdown">
            <div className="Navlink">
              <a href="/allarticles">Lifestyle</a>
              <img
                src="/img/rightarrowwhite.svg"
                alt="arrow"
                className="arrow"
              />
            </div>
            <div className="dropdown-content">
              <div className="drop">
                <div className="grid">
                  <a href="/trending">Trending</a>
                  <a href="/features">Features</a>
                  <a href="/opinion">Opinion</a>
                  <a href="/inter">Interviews</a>
                  <a href="/news">News</a>
                  <a href="/allarticles">All Lifestyle</a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="Navlink">
              <a href="/team">Team</a>
              <img
                src="/img/rightarrowwhite.svg"
                alt="arrow"
                className="arrow"
              />
            </div>
            <div className="dropdown-content">
              <div className="drop">
                <div className="grid">
                  <a href="/team/undefined">Tara</a>
                  <a href="/team/Hugh%20Woodward">Hugh</a>
                  <a href="/team/Tom%20Jackson">Tom</a>
                  <a href="/team/undefined">Seren</a>
                  <a href="/team/Spencer%20Lengsfield">Spencer</a>
                  <a href="/team">Video Team</a>
                  <a href="/team">Editorial Team</a>
                  <a href="/team">Contributors</a>
                  <a href="/team">All of Twisted</a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="Navlink">
              <a href="/show">Shows</a>
              <img
                src="/img/rightarrowwhite.svg"
                alt="arrow"
                className="arrow"
              />
            </div>
            <div className="dropdown-content">
              <div className="drop">
                <div className="grid">
                  <a>Bake In</a>
                  <a>Shelf Life</a>
                  <a>Hangin'With</a>
                  <a>Food Palace</a>
                  <a href="/show">All Shows</a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="Navlink">
              <a href="/allshop">Shop</a>
              <img
                src="/img/rightarrowwhite.svg"
                alt="arrow"
                className="arrow"
              />
            </div>
            <div className="dropdown-content">
              <div className="drop">
                <div className="grid">
                  <a href="https://www.amazon.co.uk/Twisted-Cookbook-Unserious-Delicious-Occasion/dp/1529394848/">Twisted: A Cookbook</a>
                  <a href="/allshop">All Products</a>
                </div>
              </div>
            </div>
          </div>
        </Nav>
        <div className="f-links">
          <div className="idk">
            {isSearchVisible && (
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Type in what you're looking for"
                />
              </form>
            )}
            <button onClick={handleSearchClick}>
              <img src="/img/search.svg" alt="" />
            </button>
          </div>
          <div className="Navlink">
            <a href="/sign">Sign in</a>
          </div>
        </div>
      </div>
      <div className="burger-menu">
        <div className="flex gap-5">
          {isSearchVisible && (
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Type in what you're looking for"
              />
            </form>
          )}
          <a href="/sign" className="pt-2">
            <IoPersonOutline size={30} color="white" />
          </a>
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
