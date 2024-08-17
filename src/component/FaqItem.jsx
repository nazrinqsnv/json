import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const FaqItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div
        className={`w-slide ${isOpen ? "open" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h2>{title}</h2>
        <RiArrowRightSLine size={70} />
      </div>
      <div
        className={`window-txt ${isOpen ? "open" : ""} ${menu ? "hide" : ""}`}
      >
        {content}
      </div>
    </div>
  );
};

export default FaqItem;
