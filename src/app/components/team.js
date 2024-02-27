import React from 'react';

const Team = () => {
    return (
        <div>
            <div className="find-us-section"><h2>Our Team</h2></div>
            <div className="team-section">
                <a className="team-link" style={{ padding: '0,20%' }} >
                    <img src="tyler.jpg" alt="Tyler Boscolo" width="300" height="300" style={{ borderRadius: '10px' }} />
                    <div className="team-text"><h2>Tyler Boscolo</h2></div>
                    <div className="team-buttons">
                        <a href="https://www.linkedin.com/in/tylerboscolo" className="other-icon"><img src="/linkedin.png" alt="LinkedIn" height="100%" /></a>
                        <a href="https://twitter.com/tylerboscolo" className="other-icon"><img src="x.png" alt="X Logo" height="100%" /></a>
                    </div>
                </a>
                <a className="team-link" style={{ padding: '0,20%' }} >
                    <img src="cat.png" alt="Nick Carpinito" width="300" height="300" style={{ borderRadius: '10px' }} />
                    <div className="team-text"><h2>Nick Carpinito</h2></div>
                    <div className="team-buttons">
                        <a href="https://www.linkedin.com/in/nick-carpinito/" className="other-icon"><img src="linkedin.png" alt="LinkedIn" height="100%" /></a>
                        <a href="https://twitter.com/0xmetalight" className="other-icon"><img src="x.png" alt="X Logo" height="100%" /></a>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Team;