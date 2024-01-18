"use client"
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TypeformEmbed from './components/TypeformEmbed';
import './styles.css';

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
    ep11: {
      image: "Thumbnails/ep11.png",
      youtube: "https://www.youtube.com/watch?v=JoN6uzHvnVg",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-011---DePIN-Powered-Noise-Pollution-Mapping-With-Silencio-Network-e2chku9",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-011-depin-powered-noise-pollution/id1643813996?i=1000636850604"
    },
    ep12: {
      image: "Thumbnails/ep12.png",
      youtube: "https://www.youtube.com/watch?v=UgdkuFpbk4c",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-012---The-Mycelium-Testbed---A-DePIN-Utility---With-Rishi-Mittal-e2cospj",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-012-the-mycelium-testbed-a/id1643813996?i=1000637364497"
    },
    ep13: {
      image: "Thumbnails/ep13.png",
      youtube: "https://www.youtube.com/watch?v=TNmevmFh0DA",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-013---The-Intersection-Of-Ai-And-DePIN-With-Fetch-ai-and-peaq-e2dgj81",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-013-the-intersection-of-ai-and/id1643813996?i=1000639362973"
    },
    ep14: {
      image: "Thumbnails/ep14.png",
      youtube: "https://www.youtube.com/watch?v=z2qJUsiyBZ0",
      spotify: "https://podcasters.spotify.com/pod/show/unleashing-depin/episodes/Unleashing-DePIN-Ep-014---The-State-Of-DeWi-Deployments-With-LongFI-Solutions-e2dotq5",
      apple: "https://podcasts.apple.com/us/podcast/unleashing-depin-ep-014-the-state-of-dewi/id1643813996?i=1000639967281"
    },
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
      iframe.srcdoc = '<a class="twitter-timeline" data-lang="en" data-theme="light" href="https://twitter.com/UnleashingDeWi"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
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
        <div>
          <a href="https://unleashingdepin.com" className="logo" />
          <img src="unleashing-depin.png" alt="Unleashing DePIN" width="200" height="75" />
        </div>
        <div className="SocialButtons">
          <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon" target="_blank" rel="noreferrer">
            <img src="spotify.png" alt="Spotify" height="100%" />
          </a>
          <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon" target="_blank" rel="noreferrer">
            <img src="apple.png" alt="Apple Podcasts" height="100%" />
          </a>
          <a href="https://www.youtube.com/@unleashingdepin" className="other-icon" target="_blank" rel="noreferrer">
            <img src="youtube.png" alt="YouTube" height="100%" />
          </a>
          <a href="https://twitter.com/UnleashingDeWi" className="other-icon" target="_blank" rel="noreferrer">
            <img src="x.png" alt="X Formerly Twitter Logo" height="100%" />
          </a>
          <a href="mailto:hello@unleashingdepin.com" className="other-icon">
            <img src="mail.png" alt="Email" height="100%" />
          </a>
          {/* <button onClick={openPopup}>Open Twitter Popup</button> */}
        </div>
      </div>
      <div className="hero-text">
        <h1>Unleashing DePIN</h1>
        <h2>Your favorite podcast for everything DePIN!</h2>
        <h3>Hosted by Tyler Boscolo</h3>
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
                <a href={episode.spotify} className="other-icon" target="_blank" rel="noreferrer">
                  <img src="spotify.png" alt="Spotify" height="100%" />
                </a>
                <a href={episode.apple} className="other-icon" target="_blank" rel="noreferrer">
                  <img src="apple.png" alt="Apple Podcasts" height="100%" />
                </a>
                <a href={episode.youtube} className="other-icon" target="_blank" rel="noreferrer">
                  <img src="youtube.png" alt="YouTube" height="100%" />
                </a>
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
            <a class="m-story" href="https://medium.com/@meta-light/the-ultimate-helium-resource-guide-3d29063a62a2">The Helium Ecosystem is Evolving 🎈</a>
          </div>
        </Carousel>;
      </div>
      <div className="find-us-section"><h2>Our Team</h2></div>
      <div className="team-section">
        <a className="team-link" style={{ padding: '0,20%' }} >
          <img src="tyler.jpg" alt="Tyler Boscolo" width="300" height="300" style={{ borderRadius: '10px' }}/>
          <div className="team-text"><h2>Tyler Boscolo</h2></div>
          <div className="team-buttons">
            <a href="https://www.linkedin.com/in/tyler-boscolo" className="other-icon">
              <img src="/linkedin.png" alt="LinkedIn" height="100%" />
            </a>
            <a href="https://twitter.com/tylerboscolo" className="other-icon">
              <img src="x.png" alt="X Logo" height="100%" />
            </a>
          </div>
        </a>
        <a className="team-link" style={{ padding: '0,20%' }} >
          <img src="nick.png" alt="Nick Carpinito" width="300" height="300"style={{ borderRadius: '10px' }}/>
          <div className="team-text"><h2>Nick Carpinito</h2></div>
          <div className="team-buttons">
            <a href="https://www.linkedin.com/in/nick-carpinito/" className="other-icon">
              <img src="linkedin.png" alt="LinkedIn" height="100%" />
            </a>
            <a href="https://twitter.com/0xmetalight" className="other-icon">
              <img src="x.png" alt="X Logo" height="100%" />
            </a>
          </div>
        </a>
      </div>
      <div><TypeformEmbed /></div>
    </div>
  )
}