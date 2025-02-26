import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/ImageTextSection.module.css';

const ImageTextSection = ({ imageSrc, imageAlt, heading, text }) => {
  return (
    <div className={styles.sectionWrapper}>
      <Container className="my-5 py-5">
        <Row className="align-items-center g-5">
          <Col md={6}>
            <div className={styles.imageContainer}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="img-fluid rounded-3"
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

export default ImageTextSection;
