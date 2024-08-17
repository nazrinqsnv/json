import React, { useState } from "react";

function Searchbar({ setResult }) {
  const [inputFocused, setInputFocused] = useState(false);
  const [input, setInput] = useState("");
  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setInputFocused(false);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    setTimeout(() => {
      fetchData(value);
    }, 500);
  };
  const fetchData = (value) => {
    fetch("https://raw.githubusercontent.com/nazrinqsnv/json/main/public/carouselData.json")
      .then((res) => res.json())
      .then((json) => {
        const data = Object.values(json).flatMap((item) => item);
        const result = data.filter((item) =>
          item?.object?.toLowerCase().includes(value.toLowerCase())
        );
        setResult(result);
      });
  };
  return (
    <>
      <input
        placeholder="Type in what you are looking for"
        type="text"
        className={`search-input ${inputFocused ? "focused" : ""}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}

export default Searchbar;
