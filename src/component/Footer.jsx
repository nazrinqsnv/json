import React from 'react'
import './css/Footer.css'
import { FaYoutube } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/img/backvideo.mp4" type="video/mp4" />
      </video>
      <div className='footer-cont'>
        <div className='cont-txt'>
          <h2>Want personal foodie suggestions and special Twisted member offers?</h2>
          <a href="/signup"><button className='cont-button'>join for free</button></a>
        </div>
      </div>
      <div className='media-footer'>
        <div className='media-txt'>
          <img src="/img/whiteTwistedLogo.svg" alt="logo" />
          <div className='media-links'>
            <ul>
              <li><a href="/allrecipe">Recipes</a></li>
              <li><a href="/allarticles">Features</a></li>
              <li><a href="/team">Meet the Team</a></li>
              <li><a href="/show">Shows</a></li>
            </ul>
            <ul>
              <li><a href="/cookies">Cookies</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/delivery">Delivery & Returns Information</a></li>
              <li><a href="https://junglecreations.com/">Jungle Creations</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
        </div>
        <div className='social-media'>
          <h2>Follow us:</h2>
          <div className='media-icons'>
            <a href="https://www.youtube.com/c/TwistedFood"><FaYoutube size={36}/></a>
            <a href="https://www.facebook.com/JungleTwisted"><ImFacebook2 size={30}/></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Ftwisted"><FaTwitter size={30}/></a>
            <a href="https://www.tiktok.com/@twisted"><FaTiktok size={30}/></a>
            <a href="https://www.instagram.com/twisted/"><RiInstagramFill size={30}/></a>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Footer