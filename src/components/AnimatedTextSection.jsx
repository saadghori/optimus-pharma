import { Row, Col, Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import styles from '@/styles/ImageTextSection.module.css';

// Dynamically import Lottie, disabling SSR
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false, 
});

import workingAnimation from '../../public/animations/working';

const AnimatedTextSection = ({ heading, text }) => {
  return (
    <div className={styles.sectionWrapper}>
      <Container className="my-5 py-5">
        <Row className="align-items-center g-5">
          <Col md={6}>
            <div className={styles.imageContainer}>
              <Lottie
                animationData={workingAnimation}
                loop={true}
                autoplay={true}
                style={{
                  width: '375px', 
                  height: 'auto',
                  margin: '0 auto', }}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.textContainer}>
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.text}>{text}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnimatedTextSection;