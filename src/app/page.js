"use client"
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TypeformEmbed from './components/TypeformEmbed';
import './styles.css';
import episodes from './episodes.js';

export default function Home(props) {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
  };
  const openPopup = () => {
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {overlay.remove();} else {
      const overlay = document.createElement('div');
      overlay.className = 'popup-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      overlay.style.zIndex = '9999';
      const iframe = document.createElement('iframe');
      iframe.srcdoc = '<a class="twitter-timeline" data-lang="en" data-theme="light" href="https://twitter.com/depinunleashed"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
      iframe.style.height = '100%';
      iframe.style.width = '85%';
      iframe.style.border = 'none';
      overlay.appendChild(iframe);
      const closeBtn = document.createElement('img');
      closeBtn.src = 'close.png';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '10px';
      closeBtn.style.right = '10px';
      closeBtn.style.height = '40px';
      closeBtn.style.width = '40px';
      closeBtn.addEventListener('click', () => {overlay.remove();});
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);
    }
  };

  const episodesArray = Object.values(episodes);
  return (
    <div className='body'>
      <div className="menu">
        <div><a href="https://unleashingdepin.com" className="logo" /><img src="unleashing-depin.png" alt="Unleashing DePIN" width="200" height="75"/></div>
        <div className="SocialButtons">
          <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon" target="_blank" rel="noreferrer"><img src="spotify.png" alt="Spotify" height="100%" /></a>
          <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon" target="_blank" rel="noreferrer"><img src="apple.png" alt="Apple Podcasts" height="100%"/></a>
          <a href="https://www.youtube.com/@unleashingdepin" className="other-icon" target="_blank" rel="noreferrer"><img src="youtube.png" alt="YouTube" height="100%"/></a>
          <a href="https://twitter.com/DePINUnleashed" className="other-icon" target="_blank" rel="noreferrer"><img src="x.png" alt="X Formerly Twitter Logo" height="100%" /></a>
          <a href="mailto:hello@unleashingdepin.com" className="other-icon"><img src="mail.png" alt="Email" height="100%"/></a>
          {/* <button onClick={openPopup}>Open Twitter Popup</button> */}
        </div>
      </div>
      <div className="hero-text">
        <h1 style={{paddingBottom: '30px'}}>Unleashing DePIN</h1>
        <h2 style={{paddingBottom: '70px'}}>Your favorite podcast for everything DePIN!</h2>
        <h3 style={{paddingBottom: '30px'}}>Hosted by Tyler Boscolo</h3>
      </div>
      <br></br>
      <div className="find-us-section"><h2>Recent Episodes</h2></div>
      <div>
        <Carousel swipeable={true} draggable={true} showDots={false} responsive={responsive} ssr={true} infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false} autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .5"
          transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px"
        >
          {episodesArray.reverse().map((episode, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img src={episode.image} alt={`Unleashing DePIN Episode ${index + 1}`} width='80%' draggable="false" />
              <br></br>
              <div className="SocialButtons">
                <a href={episode.spotify} className="other-icon" target="_blank" rel="noreferrer"><img src="spotify.png" alt="Spotify" height="100%"/></a>
                <a href={episode.apple} className="other-icon" target="_blank" rel="noreferrer"><img src="apple.png" alt="Apple Podcasts" height="100%"/></a>
                <a href={episode.youtube} className="other-icon" target="_blank" rel="noreferrer"><img src="youtube.png" alt="YouTube" height="100%" /></a>
              </div>
            </div>
          ))}
        </Carousel>;
      </div>
      <div className="find-us-section"><h2>Recent Articles</h2></div>
      <br></br>
      <div>
        <Carousel swipeable={true} draggable={true} showDots={false} responsive={responsive} ssr={true} infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false} autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .5"
          transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '600px' }}>
            <script async src="https://static.medium.com/embed.js"></script>
            <a class="m-story" href="https://medium.com/@meta-light/the-ultimate-depin-resource-guide-6837a8abffbb">The Ultimate DePIN Resource Guide</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '600px' }}>
            <script async src="https://static.medium.com/embed.js"></script>
            <a class="m-story" href="https://medium.com/@meta-light/exploring-the-future-of-decentralized-physical-infrastructure-networks-the-mycelium-testbed-f8ea13ca1b4a">Exploring the Future of Decentralized Physical Infrastructure Networks: The Mycelium Testbed</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '600px' }}>
            <script async src="https://static.medium.com/embed.js"></script>
            <a class="m-story" href="https://medium.com/@meta-light/on-excellent-hardware-in-tech-and-its-relationship-with-depin-9c830e400c0b">On Hardware Excellence in Tech, and it’s Relationship with DePIN</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '600px' }}>
            <script async src="https://static.medium.com/embed.js"></script>
            <a class="m-story" href="https://medium.com/@meta-light/the-helium-ecosystem-is-evolving-34cc6c9e053d">The Helium Ecosystem is Evolving 🎈</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '600px' }}>
            <script async src="https://static.medium.com/embed.js"></script>
            <a class="m-story" href="https://medium.com/@meta-light/the-ultimate-helium-resource-guide-3d29063a62a2">The Ultimate Helium Resource Guide</a>
          </div>
        </Carousel>;
      </div>
      <div className="find-us-section"><h2>Our Team</h2></div>
      <div className="team-section">
        <a className="team-link" style={{ padding: '0,20%' }} >
          <img src="tyler.jpg" alt="Tyler Boscolo" width="300" height="300" style={{borderRadius: '10px'}}/>
          <div className="team-text"><h2>Tyler Boscolo</h2></div>
          <div className="team-buttons">
            <a href="https://www.linkedin.com/in/tylerboscolo" className="other-icon"><img src="/linkedin.png" alt="LinkedIn" height="100%"/></a>
            <a href="https://twitter.com/tylerboscolo" className="other-icon"><img src="x.png" alt="X Logo" height="100%" /></a>
          </div>
        </a>
        <a className="team-link" style={{ padding: '0,20%' }} >
          <img src="cat.png" alt="Nick Carpinito" width="300" height="300"style={{ borderRadius: '10px' }}/>
          <div className="team-text"><h2>Nick Carpinito</h2></div>
          <div className="team-buttons">
            <a href="https://www.linkedin.com/in/nick-carpinito/" className="other-icon"><img src="linkedin.png" alt="LinkedIn" height="100%" /></a>
            <a href="https://twitter.com/0xmetalight" className="other-icon"><img src="x.png" alt="X Logo" height="100%" /></a>
          </div>
        </a>
      </div>
      <div><TypeformEmbed /></div>
    </div>
  )
}
