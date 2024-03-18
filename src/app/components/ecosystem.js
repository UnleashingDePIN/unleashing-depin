import React, { useState, useEffect } from "react";

const Ecosystem = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/images");
        const imageUrls = await response.json();
        setImages(imageUrls);
      } catch (error) {console.error("Failed to fetch images:", error);}
    }
    fetchImages();
  }, []);

  return (
    <div>
      <div className="find-us-section"><h2>Ecosystem</h2></div>
      <br></br>
      <div style={{ padding: "0 50px", margin: "0 auto" }}>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "30px", alignItems: "center", justifyContent: "center"}}>
          {images.map((image, index) => {return (<img key={index} src={image} alt={`Ecosystem Logo ${index}`} style={{width: "150px", height: "auto"}}/>);})}
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
