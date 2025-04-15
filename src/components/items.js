import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const importAllImages = (r) => r.keys().map(r);
const images = importAllImages(require.context('../images/items', false, /\.(png|jpe?g|svg)$/));

const imageDescriptions = [
    "Cups",
    "Frying pan",
    "Knives",
    "Spatulas",
    "Tableware",
    "Teatime",
];

const randomDescriptions = [
    "Хорошая продукция",
    "Качественные товары",
    "Долговечность на первом месте",
    "Практичные и удобные",
    "Надежность и качество",
    "Для ежедневного использования"
];

const ContainerItems = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  grid-column: span 12;
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`;

const MotionLabel = styled(motion.p)`
  grid-column: span 12;
  color: rgba(79, 72, 72, 0.7);
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
`;

const CarouselWrapper = styled.div`
  grid-column: span 12;
  position: relative;
  overflow: hidden;
  scroll-behavior: smooth;
  margin-bottom: 100px;
`;

const CarouselInner = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 1;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  transform: translateY(-50%);
  &:focus {
    outline: none;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const ImageContainer = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotionImg = styled(motion.img)`
  width: 100%;
  height: auto;
  max-width: 560px;
  max-height: 483px;
  object-fit: cover;
  cursor: pointer;
`;
const HoverWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover h4::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background-color: #C3612F;
  }
`;
const MotionCardText = styled(motion.div)`
  text-align: center;
  margin-top: 10px;

  h4 {
    font-size: 20px;
    color: #4F4848;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin-bottom: 5px;
    position: relative;
    padding-bottom: 5px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background-color: #C3612F;
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 35px;
    }
  }

  p {
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    color: rgba(79, 72, 72, 0.5);
    margin-top: 8px;
  }
`;

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 3);
        } else {
            setCurrentIndex(currentIndex - 3);
        }
    };

    const handleNext = () => {
        if (currentIndex + 3 >= images.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 3);
        }
    };

    const getCurrentImages = () => {
        return images.slice(currentIndex, currentIndex + 3);
    };

    return (
        <CarouselWrapper>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <CarouselInner>
                        {getCurrentImages().map((image, index) => (

                            <ImageContainer key={index}>
                                <HoverWrap>
                                    <MotionImg
                                        src={image}
                                        alt={`Image ${index}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                        viewport={{ once: false, amount: 0.5 }}
                                    />
                                    <MotionCardText
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <h4>{imageDescriptions[currentIndex + index]}</h4>
                                        <p>{randomDescriptions[currentIndex + index]}</p>
                                    </MotionCardText>
                                </HoverWrap>
                            </ImageContainer>
                        ))}
                    </CarouselInner>
                </div>
            </div>

            <ArrowButton className="prev" onClick={handlePrev}>
                &#10094;
            </ArrowButton>
            <ArrowButton className="next" onClick={handleNext}>
                &#10095;
            </ArrowButton>
        </CarouselWrapper >
    );
};

function Items() {
    return (
        <ContainerItems>
            <MotionLabel
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.6 }}
            >
                Categories of products that we sell
            </MotionLabel>
            <Carousel />
        </ContainerItems>
    );
}

export default Items;
