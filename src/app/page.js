"use client"
import React, {useEffect} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TypeformEmbed from './components/TypeformEmbed';
import './styles.css';
import episodes from './data/episodesData.js';
import blogs from './data/blogsData.js';
import Header from './components/header.js';
import Team from './components/team.js';
import Ecosystem from './components/ecosystem.js';
import carouselResponsive from './settings/carouselResponsive.js';

export default function Home(props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.medium.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };}, []);
  const episodesArray = Object.values(episodes);
  return (
    <div className='body'>
      <Header/>
      <div className="hero-text">
        <h1>Unleashing DePIN</h1>
        <h2>Your favorite podcast for everything DePIN!</h2>
        <h3>Hosted by Tyler Boscolo</h3>
      </div>
      <br></br>
      <div className="find-us-section"><h2>Recent Episodes</h2></div>
      <div>
        <Carousel swipeable={true} draggable={true} showDots={false} responsive={carouselResponsive} ssr={true} infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false} autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .5"
          transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
          {episodesArray.reverse().map((episode, index) => (
            <div key={index} className="episode-carousel-card">
              <a href={`/${episodesArray.length - index}`} className='carousel-item'>
                <img src={episode.image} alt={`Unleashing DePIN Episode ${index + 1}`} width='80%' draggable="false"/>
              </a>
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
        <Carousel swipeable={true} draggable={true} showDots={false} responsive={carouselResponsive} ssr={true} infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false} autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .5"
          transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
          {blogs.map((blog, index) => (<div className="medium-container" key={index}><a className="m-story" href={blog.url}>{blog.title}</a></div>))}
        </Carousel>;
      </div>
      <Team/>
      {/* <Ecosystem/> */}
      <div><TypeformEmbed/></div>
    </div>
  )
}
