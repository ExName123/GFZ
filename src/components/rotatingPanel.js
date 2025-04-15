import React from 'react';
import styled from 'styled-components';

const importAllImages = (r) => r.keys().map(r);
const images = importAllImages(require.context('../images/rotatingPanel', false, /\.(png|jpe?g|svg)$/));

import './css/rotatingPanel.css';

const descriptions = [
  "High-quality cups and utensils made with care",
  "Your kitchen deserves the best tools",
  "Everyday essentials for cooking and serving",
  "Crafted kitchenware for modern homes",
  "Elegant cups and reliable utensils",
  "Designed for comfort and durability",
  "Precision in every kitchen detail",
  "Style meets practicality in our collection",
  "Beautifully made kitchen accessories",
  "Inspired by everyday chefs",
];

const PanelWrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  grid-column: span 12;
  display: flex;
  flex-direction: column;
`;

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: white;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const CustomHR = styled.hr`
  margin-top: 50px;
  grid-column: span 12;
  height: 3px;
  border: none;
  background-color: rgba(243, 216, 199, 1);
`;

const Image = styled.img`
  width: 100%;
  height: 523px;
  object-fit: cover;
`;

const RotatingPanel = () => {
  return (
    <PanelWrapper>
      <CarouselContainer>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <ImageWrapper>
                  <Image
                    src={image}
                    className="d-block w-100"
                    alt={`Слайд ${index + 1}`}
                  />
                  <TextOverlay className="text-overlay">
                    {descriptions[index % descriptions.length]}
                  </TextOverlay>
                </ImageWrapper>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Предыдущий</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Следующий</span>
          </button>
        </div>
      </CarouselContainer>
      <CustomHR />
    </PanelWrapper>
  );
};

export default RotatingPanel;
