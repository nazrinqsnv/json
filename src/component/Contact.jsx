import React, { useState } from "react";
import "./css/Policy.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FaqItem from "./FaqItem";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const faqItemData = [
    {
      title: "Do you ship outside the UK?",
      content: (
        <>
          <h2>We only ship food and drink to addresses based in the UK.</h2>
          <h2>
            All other items are available for international shipping. Fees vary
            depending on your delivery address.
          </h2>
        </>
      ),
    },
    {
      title: "What are your shipping options?",
      content: (
        <>
            <h2>
              Delivery fees are calculated on checkout depending on your
              delivery address.
            </h2>
            <h2>
              <b>Next Day – Tracked via DPD.</b>
            </h2>
            <h2>
              Place your order by 3pm for delivery the next working day. NB:
              Orders placed on Friday will be delivered on Monday.
            </h2>
            <h2>
              <b>Saturday Delivery – Tracked via DPD.</b>
            </h2>
            <h2>
              Place your order by 3pm on Friday for delivery the next day
              (Saturday).
            </h2>
            <h2>
              <b>Standard Delivery – Tracked via Yodel</b>
            </h2>
            <h2>
              Orders are despatched within 24 hours and should arrive within 2-4
              working days.
            </h2>
            <h2>
              <b>International Delivery – Tracked</b>
            </h2>
            <h2>
              Orders despatched within 24 hours and should arrive within 7-12
              working days
            </h2>
        </>
      ),
    },
    {
      title: "Age Verification",
      content: (
        <>
            <h2>
              All our alcohol orders are subject to age verification. Once your
              order is placed, we will verify your age using your order details.
            </h2>
            <h2>
              If we can’t verify your age right away, we will be in touch via
              email for you to provide us with photographic ID using our
              super-secure age verification system called AgeChecked.
            </h2>
            <h2>
              Please keep in mind that it is illegal to purchase alcohol as a
              proxy for anyone under the age of 18.
            </h2>
        </>
      ),
    },
    {
      title: "Why was my order cancelled?",
      content: (
        <>
            <h2>
              If we can’t verify your age and we haven’t heard back from you for
              several days to verify your age, we will cancel your order and
              issue a full refund.
            </h2>
        </>
      ),
    },
    {
      title: "I want to return my order",
      content: (
        <>
            <h2>
              If you are unhappy with your purchase, please reach out to our
              support team using the form on this page.
            </h2>
            <h2>
              Please note: We can’t accept returns of any food or drink items,
              but we will do everything we can do ensure that you are happy with
              your purchase.
            </h2>
            <h2>
              Read about our returns policy <a href="/delivery">here</a>.
            </h2>
        </>
      ),
    },
  ];
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "please fill the gap";
    }

   

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };
  const position = [51.51485, -0.06638];
  return (
    <>
      <div
        className="contact-back"
        style={{
          backgroundImage: `url(./img/cocktail-collection-pdp_1800x1800-1024x1024-1.jpeg)`,
        }}
      >
        <div className="contact-txt">
          <h2>Contact us</h2>
          <h3>Have a question or want to get in touch?</h3>
        </div>
      </div>
      <div className="team-h p-14">FAQs</div>
      <div className="windows">
        {faqItemData.map((item) => (
          <FaqItem {...item} />
        ))}
      </div>
      <div className="all-textar">
        <div>
          <div className="team-h p-14">Don't be shy, ask us anything.</div>
          <div className="all-form">
            <form onSubmit={handleSubmit}>
              <div className="inputs-form">
                <div>
                  <input
                    type="text"
                    name="first"
                    placeholder="*First Name"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <span className="error-sp">{errors.username}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="first"
                    placeholder="*Last Name"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <span className="error-sp">{errors.username}</span>
                  )}
                </div>
              </div>
              <div className="inputs-form">
              <div>
                  <input
                    type="text"
                    name="first"
                    placeholder="*Email"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <span className="error-sp">{errors.username}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="first"
                    placeholder="*Phone Number"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <span className="error-sp">{errors.username}</span>
                  )}
                </div>
              </div>
              <div>
              <textarea
                  cols={80}
                  rows={8}
                  type="message"
                  name="message"
                  placeholder="*Write something..."
                  onChange={handleChange}
                />
                  {errors.username && (
                    <span className="error-sp">{errors.username}</span>
                  )}
                </div>
              <button className="keen" type="submit">
                get in touch
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="all-number">
        <div className="numbers">
          <h2>General Enquiries</h2>
          <a href="hello@junglecreations.com">hello@junglecreations.com</a>
          <a href="+44 (0) 203 687 0370">+44 (0) 203 687 0370</a>
        </div>
        <div className="numbers">
          <h2>Press Enquiries</h2>
          <a href="stephanieiosue@junglecreations.com">
            stephanieiosue@junglecreations.com
          </a>
          <a href="44 (0) 203 687 0370">44 (0) 203 687 0370</a>
        </div>
        <div className="numbers">
          <h2>Find us</h2>
          <a href="https://www.google.com/maps/place/6+Batty+Street+E1,+London+E1+1NU,+UK/@51.5144509,-0.0648219,15z/data=!4m6!3m5!1s0x48760334a8de0f57:0x767cb8e2e1a2c4cf!8m2!3d51.5144876!4d-0.0649922!16s%2Fg%2F11fmsgyljc?entry=ttu">
            6 Batty Street London, E1 1NU, UK
          </a>
        </div>
        <div className="social-media text-[#0d154c]">
          <h2>Follow us:</h2>
          <div className="media-icons">
            <a href="https://www.youtube.com/c/TwistedFood">
              <FaYoutube size={36}/>
            </a>
            <a href="https://www.facebook.com/JungleTwisted">
              <ImFacebook2 size={30}/>
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Ftwisted">
              <FaTwitter size={30}/>
            </a>
            <a href="https://www.tiktok.com/@twisted">
              <FaTiktok size={30}/>
            </a>
            <a href="https://www.instagram.com/twisted/">
              <RiInstagramFill size={30}/>
            </a>
          </div>
        </div>
      </div>
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Location from Google Maps Link</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Contact;
