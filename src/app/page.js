"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function Home() {
  const sliderSettings = { dots: true, infinite: true, speed: 50, slidesToShow: 3, slidesToScroll: 1 };
  return (
    <body className='body'>
      <div className="menu">
        <div>
          <a href="https://unleashingdepin.com" className="logo"/>
          <img src="/Unleashing DePIN Logo .png" alt="Unleashing DePIN" width="200" height="75"/>
        </div>
        <div className="SocialButtons">
          <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon">
            <img src="/spotify-svgrepo-com (2).png" alt="Spotify" height="100%"/>
          </a>
          <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon">
            <img src="/apple-podcast.234x256.png" alt="Apple Podcasts" height="100%"/>
          </a>
          <a href="https://www.youtube.com/@unleashingdepin" className="other-icon">
            <img src="/youtube-svgrepo-com.png" alt="YouTube" height="100%"/>
          </a>
          <a href="https://twitter.com/UnleashingDeWi" className="other-icon">
            <img src="/X (formerly Twitter) Logo.png" alt="X Formerly Twitter Logo" height="100%"/>
          </a>
        </div>
      </div>
      <div className="hero-text">
        <h1>Unleashing DePIN</h1>
        <h2>Your favorite podcast for everything DePIN!</h2>
        <h3>Hosted by Tyler Boscolo</h3>
      </div>
      <div className="find-us-section">
        <h2>Watch us on:</h2>
        <div className="social-logos">
          <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="social-logo-link">
            <img src="/Listen on Spotify.png" alt="Unleashing DePIN onSpotify" width="200" height="75"/>
          </a>
          <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="social-logo-link">
            <img src="/Listen on Apple.png" alt="Unleashing DePIN on Apple Podcasts" width="200" height="75"/>
          </a>
          <a href="https://www.youtube.com/@unleashingdepin" className="social-logo-link">
            <img src="/Watch on YouTube.png" alt="Unleashing DePIN on YouTube" width="200" height="75"/>
          </a>
        </div>
      </div>
      <div className="find-us-section">
        <h2>Recent Episodes</h2>
      </div>
      <div style={{ transform: 'scale(0.9)' }}>        
        <Slider {...sliderSettings}>
          <div className="episode-cell"><img src="/Thumbnails/ep10.png" alt="Unleashing DePIN Episode 10" width='100%'/></div>
          <div className="episode-cell"><img src="/Thumbnails/ep9.png" alt="Unleashing DePIN Episode 9" width='100%'/></div>
          <div className="episode-cell"><img src="/Thumbnails/ep8.png" alt="Unleashing DePIN Episode 8" width='100%'/></div>
          <div className="episode-cell"><img src="/Thumbnails/ep7.png" alt="Unleashing DePIN Episode 7" width='100%'/></div>
          <div className="episode-cell"><img src="/Thumbnails/ep6.png" alt="Unleashing DePIN Episode 6" width='100%'/></div>
       </Slider>
      </div>
    </body>
  )
}