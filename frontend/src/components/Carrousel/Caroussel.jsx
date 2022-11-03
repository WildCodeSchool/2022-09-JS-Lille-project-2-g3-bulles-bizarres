import React, { useRef, useState } from "react";
import ReactCardCarousel from "react-card-carousel";
import Card from "../Cards/Card/Index";

function Slideshow() {
  let carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ReactCardCarousel
      ref={(Carousel) => {
        carousel = Carousel;
      }}
      autoplay={false}
      autoplay_speed={2500}
      afterChange={() => setCurrentIndex(carousel.getCurrentIndex())}
    >
      <Card hoverable={currentIndex === 0} />
      <Card hoverable={currentIndex === 1} />
      <Card hoverable={currentIndex === 2} />
    </ReactCardCarousel>
  );
}

export default Slideshow;
