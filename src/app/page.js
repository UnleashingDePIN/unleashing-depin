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
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
  };
  const episodes = {
    ep1: {
      image: "Thumbnails/ep1.png",
      youtube: "https://www.youtube.com/watch?v=FAUD0h5ZkWE",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DeWi-001---A-Conversation-with-LongFi-Solutions-CEO--Josh-Heller-e1nkdbb",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-dewi-001-a-conversation-with-longfi/id1643813996?i=1000579005834"
    },
    ep2: {
      image: "Thumbnails/ep2.png",
      youtube: "https://www.youtube.com/watch?v=s2_qVViiIsA",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DeWi-002--Investing-In-DeWi-with-David-Byrd-of-BlueYard-Capital-e1r5bce",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-dewi-002-investing-in-dewi-with-david-byrd/id1643813996?i=1000587158853"
    },
    ep3: {
      image: "Thumbnails/ep3.png",
      youtube: "https://www.youtube.com/watch?v=BsbdDRzQL3g",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DeWi-003--Building-DeWi-Picks-and-Shovels-with-Andrew-Fisher-of-SolSplits-e1sld7i",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-dewi-003-building-dewi-picks-and-shovels/id1643813996?i=1000591156272"
    },
    ep4: {
      image: "Thumbnails/ep4.png",
      youtube: "https://www.youtube.com/watch?v=3XhDKfEa1Rk",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DeWi-004---A-Conversation-with-Richard-DeVaul--CEO-of-XNET-e1v1gq4",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-dewi-004-a-conversation-with-richard/id1643813996?i=1000599857346"
    },
    ep5: {
      image: "Thumbnails/ep5.png",
      youtube: "https://www.youtube.com/watch?v=vR02En_cTVI",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DeWi-005---Unlocking-the-Business-Value-of-Heliums-LoRaWAN-Network-With-Miroslav--CEO-of-Heliotics-e20kus1",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-dewi-005-unlocking-the-business-value/id1643813996?i=1000604713962"
    },
    ep6: {
      image: "Thumbnails/ep6.png",
      youtube: "https://www.youtube.com/watch?v=14OJKJnMn_c",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DeWi-006---Real-World-Data-For-Proof-of-Efficiency-with-enviroBLOQ-e26b1g8",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-dewi-006-real-world-data-for-proof-of/id1643813996?i=1000618705346"
    },
    ep7: {
      image: "Thumbnails/ep7.png",
      youtube: "https://www.youtube.com/watch?v=F6YZkS65rKo",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-007---Scaling-DePIN-With-Eclipse---A-Conversation-With-Veronica-Buron-e280qm3",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-007-scaling-depin-with-eclipse/id1643813996?i=1000624206656"
    },
    ep8: {
      image: "Thumbnails/ep8.png",
      youtube: "https://www.youtube.com/watch?v=XibhJjaSV6g",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-008---A-Conversation-With-Elijah-From-Relay-Wireless-e2ar4m4",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-008-a-conversation-with-elijah/id1643813996?i=1000632025109"
    },
    ep9: {
      image: "Thumbnails/ep9.png",
      youtube: "https://www.youtube.com/watch?v=EduGR07SoDc",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-009---Chatting-With-Alex-Rawitz-the-Co-Founder-of-DIMO-e2ar4oc",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-009-chatting-with-alex-rawitz-the/id1643813996?i=1000632027849"
    },
    ep10: {
      image: "Thumbnails/ep10.png",
      youtube: "https://www.youtube.com/watch?v=7BRezDfQ1fE",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-010---A-Conversation-With-Gabe-From-Hivemapper-e2bevl5",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-010-a-conversation-with-gabe/id1643813996?i=1000633640584"
    },
    // ep11: {
    //   image: "Thumbnails/ep11.png",
    //   youtube: "https://www.youtube.com/watch?v=JoN6uzHvnVg",
    //   spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-011---DePIN-Powered-Noise-Pollution-Mapping-With-Silencio-Network-e2chku9",
    //   apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-011-depin-powered-noise-pollution/id1643813996?i=1000636850604"
    // },
    ep12: {
      image: "Thumbnails/ep12.png",
      youtube: "https://www.youtube.com/watch?v=UgdkuFpbk4c",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-012---The-Mycelium-Testbed---A-DePIN-Utility---With-Rishi-Mittal-e2cospj",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-012-the-mycelium-testbed-a/id1643813996?i=1000637364497"
    },
  }
  const episodesArray = Object.values(episodes);
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
      <br></br>
      {/* <div className="find-us-section">
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
      </div> */}
      <div className="find-us-section"><h2>Recent Episodes</h2></div>
      <div>
        <Carousel swipeable={true} draggable={true} showDots={false} responsive={responsive} ssr={true}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .5" transitionDuration={500} containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]} deviceType={props.deviceType} dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {episodesArray.map((episode, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img src={episode.image} alt={`Unleashing DePIN Episode ${index + 1}`} width='80%' draggable="false" />
              <br></br>
              <div className="SocialButtons">
                <a href={episode.spotify} className="other-icon">
                  <img src="/spotify-svgrepo-com (2).png" alt="Spotify" height="100%" />
                </a>
                <a href={episode.apple} className="other-icon">
                  <img src="/apple-podcast.234x256.png" alt="Apple Podcasts" height="100%" />
                </a>
                <a href={episode.youtube} className="other-icon">
                  <img src="/youtube-svgrepo-com.png" alt="YouTube" height="100%" />
                </a>
              </div>
            </div>
          ))}
        </Carousel>;
      </div>
      <div className="find-us-section"><h2>Our Team</h2></div>
      <div className="team-section">
        <a className="team-link">
          <img src="tyler.jpg" alt="Tyler Boscolo" width="400" height="400" />
          <div className="team-text"><h2>Tyler Boscolo</h2></div>
          <div className="team-buttons">
            <a href="https://www.linkedin.com/in/tyler-boscolo-2965a4285/" className="other-icon">
              <img src="/linkedin-white-1.png" alt="Spotify" height="100%" />
            </a>
            <a href="https://twitter.com/tylerboscolo" className="other-icon">
              <img src="/X (formerly Twitter) Logo.png" alt="X Formerly Twitter Logo" height="100%" />
            </a>
          </div>
        </a>
        <a className="team-link">
          <img src="nick.png" alt="Nick Carpinito" width="400" height="400" />
          <div className="team-text"><h2>Nick Carpinito</h2></div>
          <div className="team-buttons">
            <a href="https://www.linkedin.com/in/nick-carpinito/" className="other-icon">
              <img src="/linkedin-white-1.png" alt="Spotify" height="100%"/>
            </a>
            <a href="https://twitter.com/0xmetalight" className="other-icon">
              <img src="/X (formerly Twitter) Logo.png" alt="X Formerly Twitter Logo" height="100%" />
            </a>
          </div>
        </a>
      </div>
    </body>
  )
}