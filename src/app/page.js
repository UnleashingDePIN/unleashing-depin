"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home(props) {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
  };
  const episodes = {
    ep1: {
      image: "Thumbnails/ep1.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep2: {
      image: "Thumbnails/ep2.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep3: {
      image: "Thumbnails/ep3.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep4: {
      image: "Thumbnails/ep4.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep5: {
      image: "Thumbnails/ep5.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep6: {
      image: "Thumbnails/ep6.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep7: {
      image: "Thumbnails/ep7.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep8: {
      image: "Thumbnails/ep8.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep9: {
      image: "Thumbnails/ep9.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep10: {
      image: "Thumbnails/ep10.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep11: {
      image: "Thumbnails/ep11.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
    ep12: {
      image: "Thumbnails/ep12.png",
      youtube: "https://www.youtube.com/@unleashingdepin",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996"
    },
  }
  return (
    <body className='body'>
      <div className="menu">
        <div>
          <a href="https://unleashingdepin.com" className="logo" />
          <img src="/Unleashing DePIN Logo .png" alt="Unleashing DePIN" width="200" height="75" />
        </div>
        <div className="SocialButtons">
          <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon">
            <img src="/spotify-svgrepo-com (2).png" alt="Spotify" height="100%" />
          </a>
          <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon">
            <img src="/apple-podcast.234x256.png" alt="Apple Podcasts" height="100%" />
          </a>
          <a href="https://www.youtube.com/@unleashingdepin" className="other-icon">
            <img src="/youtube-svgrepo-com.png" alt="YouTube" height="100%" />
          </a>
          <a href="https://twitter.com/UnleashingDeWi" className="other-icon">
            <img src="/X (formerly Twitter) Logo.png" alt="X Formerly Twitter Logo" height="100%" />
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
            <img src="/Listen on Spotify.png" alt="Unleashing DePIN onSpotify" width="200" height="75" />
          </a>
          <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="social-logo-link">
            <img src="/Listen on Apple.png" alt="Unleashing DePIN on Apple Podcasts" width="200" height="75" />
          </a>
          <a href="https://www.youtube.com/@unleashingdepin" className="social-logo-link">
            <img src="/Watch on YouTube.png" alt="Unleashing DePIN on YouTube" width="200" height="75" />
          </a>
        </div>
      </div>
      <div className="find-us-section"><h2>Recent Episodes</h2></div>
      <div>
        <Carousel swipeable={true} draggable={true} showDots={false} responsive={responsive} ssr={true}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000} keyBoardControl={true} customTransition="all .5" transitionDuration={500} containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]} deviceType={props.deviceType} dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/Thumbnails/ep10.png" alt="Unleashing DePIN Episode 10" width='80%' draggable="false" />
            <br></br>
            <div className="SocialButtons">
              <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon">
                <img src="/spotify-svgrepo-com (2).png" alt="Spotify" height="100%" />
              </a>
              <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon">
                <img src="/apple-podcast.234x256.png" alt="Apple Podcasts" height="100%" />
              </a>
              <a href="https://www.youtube.com/@unleashingdepin" className="other-icon">
                <img src="/youtube-svgrepo-com.png" alt="YouTube" height="100%" />
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/Thumbnails/ep9.png" alt="Unleashing DePIN Episode 9" width='80%' draggable="false" />
            <br></br>
            <div className="SocialButtons">
              <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon">
                <img src="/spotify-svgrepo-com (2).png" alt="Spotify" height="100%" />
              </a>
              <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon">
                <img src="/apple-podcast.234x256.png" alt="Apple Podcasts" height="100%" />
              </a>
              <a href="https://www.youtube.com/@unleashingdepin" className="other-icon">
                <img src="/youtube-svgrepo-com.png" alt="YouTube" height="100%" />
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/Thumbnails/ep8.png" alt="Unleashing DePIN Episode 8" width='80%' draggable="false" />
            <br></br>
            <div className="SocialButtons">
              <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon">
                <img src="/spotify-svgrepo-com (2).png" alt="Spotify" height="100%" />
              </a>
              <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon">
                <img src="/apple-podcast.234x256.png" alt="Apple Podcasts" height="100%" />
              </a>
              <a href="https://www.youtube.com/@unleashingdepin" className="other-icon">
                <img src="/youtube-svgrepo-com.png" alt="YouTube" height="100%" />
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/Thumbnails/ep7.png" alt="Unleashing DePIN Episode 7" width='80%' draggable="false" />
            <br></br>
            <div className="SocialButtons">
              <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon">
                <img src="/spotify-svgrepo-com (2).png" alt="Spotify" height="100%" />
              </a>
              <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon">
                <img src="/apple-podcast.234x256.png" alt="Apple Podcasts" height="100%" />
              </a>
              <a href="https://www.youtube.com/@unleashingdepin" className="other-icon">
                <img src="/youtube-svgrepo-com.png" alt="YouTube" height="100%" />
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/Thumbnails/ep6.png" alt="Unleashing DePIN Episode 6" width='80%' draggable="false" />
            <br></br>
            <div className="SocialButtons">
              <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon">
                <img src="/spotify-svgrepo-com (2).png" alt="Spotify" height="100%" />
              </a>
              <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon">
                <img src="/apple-podcast.234x256.png" alt="Apple Podcasts" height="100%" />
              </a>
              <a href="https://www.youtube.com/@unleashingdepin" className="other-icon">
                <img src="/youtube-svgrepo-com.png" alt="YouTube" height="100%" />
              </a>
            </div>
          </div>
        </Carousel>;
      </div>
    </body>
  )
}