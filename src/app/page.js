"use client"
import React from 'react';
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
import carouselResponsive from './settings/carouselResponsive.js';

export default function Home(props) {
  const episodesArray = Object.values(episodes);
  return (
    <div className='body'>
      <Header/>
      <div className="hero-text">
        <h1 style={{paddingBottom: '30px'}}>Unleashing DePIN</h1>
        <h2 style={{paddingBottom: '70px'}}>Your favorite podcast for everything DePIN!</h2>
        <h3 style={{paddingBottom: '30px'}}>Hosted by Tyler Boscolo</h3>
      </div>
      <br></br>
      <div className="find-us-section"><h2>Recent Episodes</h2></div>
      <div>
        <Carousel swipeable={true} draggable={true} showDots={false} responsive={carouselResponsive} ssr={true} infinite={true}
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
        <Carousel swipeable={true} draggable={true} showDots={false} responsive={carouselResponsive} ssr={true} infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false} autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .5"
          transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
          {blogs.map((blog, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '600px' }}>
              <script async src="https://static.medium.com/embed.js"></script>
              <a class="m-story" href={blog.url}>{blog.title}</a>
            </div>
          ))}
        </Carousel>;
      </div>
      <Team/>
      <div><TypeformEmbed /></div>
    </div>
  )
}
