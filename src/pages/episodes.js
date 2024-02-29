import React from 'react';
import '../app/styles.css';
import '../app/globals.css';
import Header from '../app/components/header.js';
import episodes from '../app/data/episodesData.js';


const Episodes = () => {
    const episodesArray = Object.values(episodes);

    return (
        <div className="body">
            <Header/>
            <div className="hero-text">
                <h1 style={{paddingBottom: '30px'}}>Unleashing DePIN</h1>
                <h2 style={{paddingBottom: '70px'}}>Episode Library</h2>
            </div>
            <br></br><br></br>
            <div className="episodes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                {episodesArray.reverse().map((episode, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                        <img src={episode.image} width="100%" alt={`Unleashing DePIN Episode ${index + 1}`}/>
                        <br></br>
                        <div className="SocialButtons">
                            <a href={episode.spotify} className="other-icon" target="_blank" rel="noreferrer"><img src="spotify.png" alt="Spotify" height="100%"/></a>
                            <a href={episode.apple} className="other-icon"  target="_blank" rel="noreferrer"><img src="apple.png" alt="Apple Podcasts" height="100%"/></a>
                            <a href={episode.youtube} className="other-icon"  target="_blank" rel="noreferrer"><img src="youtube.png" alt="YouTube" height="100%"/></a>
                        </div>
                    </div>
                ))}
            </div>
            <br></br>
        </div>
    );
};

export default Episodes;