import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/ImageTextSection.module.css';

const ImageTextSection = ({ imageSrc, imageAlt, heading, text, imagePosition = 'left' }) => {
  // Define the image column
  const imageCol = (
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
  );

  // Define the text column
  const textCol = (
    <Col md={6}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </Col>
  );

  return (
    <div className={styles.sectionWrapper}>
      <Container className="my-5 pb-3 py-4">
        <Row className="align-items-center g-5">
          {imagePosition === 'left' ? (
            <>
              {imageCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {imageCol}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ImageTextSection;