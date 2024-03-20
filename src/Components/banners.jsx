import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const imageArray = [
  "https://shorturl.at/aJN26",
 "https://img.freepik.com/premium-psd/new-year-sale-3d-creative-banner_47987-18756.jpg",
];
function Banners() {
  useEffect(() => {
    const handleAutoplay = setInterval(nextImage, 2500);
    return () => clearInterval(handleAutoplay);
  }, [nextImage]);
  const [activeImage, handleactiveImage] = useState(0);
  function nextImage() {
    if (activeImage === imageArray.length-1) {
      handleactiveImage(0);
      return;
    }
    handleactiveImage(activeImage+1);
    console.log(activeImage);
  }
  function prevImage() {
    if (activeImage === imageArray.length - 1) {
      handleactiveImage(0);
      return;
    }
    handleactiveImage(activeImage+1);
    console.log(activeImage);
  }



  return (
    <div className="banner">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            onClick={prevImage}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            onClick={nextImage}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div className="bannerCreater">
            <img className="bannerImages" src={imageArray[activeImage]} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Banners;
