import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="menu">
        <Link href="/" className="logo"><img src="unleashing-depin.png" alt="Unleashing DePIN" width="200" height="75"/></Link>
        <div className="SocialButtons">
          <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon" target="_blank" rel="noreferrer"><img src="spotify.png" alt="Spotify" height="100%" /></a>
          <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon" target="_blank" rel="noreferrer"><img src="apple.png" alt="Apple Podcasts" height="100%"/></a>
          <a href="https://www.youtube.com/@unleashingdepin" className="other-icon" target="_blank" rel="noreferrer"><img src="youtube.png" alt="YouTube" height="100%"/></a>
          <a href="https://twitter.com/DePINUnleashed" className="other-icon" target="_blank" rel="noreferrer"><img src="x.png" alt="X Formerly Twitter Logo" height="100%" /></a>
          <a href="mailto:hello@unleashingdepin.com" className="other-icon"><img src="mail.png" alt="Email" height="100%"/></a>
          {/* <button onClick={openPopup}>Open Twitter Popup</button> */}
        </div>
    </div>
  );
};

export default Header;