import styled from "styled-components";

export default styled.section`
  padding-top: 4em;
  position: relative;
  z-index: 20;
  .slide {
    aspect-ratio: 16/9;
    overflow: hidden;
    & > img {
      width: 100%;
    }
  }
  .swiper {
    overflow: inherit;
  }
`;
