import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

import img1 from '../images/cupes/image-31-5.png';
import img2 from '../images/cupes/image-31-6.png';
import img3 from '../images/cupes/image-31-7.png';
import img4 from '../images/cupes/image-31-8.png';

const FullWidthPanel = styled.div`
  width: 100%;
  background-color: #F4D2BC;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 80px;
`;

const ContentWrapper = styled.div`
  margin: 0 100px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`;

const Title = styled(motion.p)`
  grid-column: 1 / -1;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin-bottom: 5px;
`;

const Description = styled(motion.p)`
  grid-column: 3 / 11;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  text-align: center;
  margin: 30px 0;
`;

const Image = styled(motion.img)`
  width: 100%;
  object-fit: cover;
`;

const Button = styled(motion.button)`
  grid-column: 1 / -1;
  justify-self: center;
  width: 500px;
  height: 50px;
  background-color: #C3612F;
  color: #FFFFFF;
  border: 2px solid #C3612F;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &::selection {
    background: #C3612F;
    color: #FFFFFF;
  }
`;

const animationVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Cupes = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: false, margin: '-100px' });
  const isInView2 = useInView(ref2, { once: false, margin: '-100px' });
  const isInView3 = useInView(ref3, { once: false, margin: '-100px' });
  const isInView4 = useInView(ref4, { once: false, margin: '-100px' });

  return (
    <FullWidthPanel>
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our exclusive cupes
        </Title>

        <motion.div
          ref={ref1}
          style={{ gridColumn: '1 / span 3' }}
          variants={animationVariants}
          initial="hiddenLeft"
          animate={isInView1 ? 'visible' : 'hiddenLeft'}
        >
          <Image src={img1} alt="Cup 1" style={{ height: 520 }} />
        </motion.div>

        <motion.div
          ref={ref2}
          style={{ gridColumn: '4 / span 5' }}
          variants={animationVariants}
          initial="hiddenRight"
          animate={isInView2 ? 'visible' : 'hiddenRight'}
        >
          <Image src={img2} alt="Cup 2" style={{ height: 520 }} />
        </motion.div>

        <motion.div
          ref={ref3}
          style={{ gridColumn: '9 / span 4' }}
          variants={animationVariants}
          initial="hiddenLeft"
          animate={isInView3 ? 'visible' : 'hiddenLeft'}
        >
          <Image src={img3} alt="Cup 3" style={{ height: 271, marginBottom: 10 }} />
          <Image src={img4} alt="Cup 4" style={{ height: 239 }} />
        </motion.div>

        <Description
          ref={ref4}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea
        </Description>

        <Button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Know more...
        </Button>
      </ContentWrapper>
    </FullWidthPanel>
  );
};

export default Cupes;
