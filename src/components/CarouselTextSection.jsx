import { Container, Row, Col, Carousel } from 'react-bootstrap';
import styles from '@/styles/CarouselTextSection.module.css';
import Link from 'next/link';

export default function CarouselTextSection({ images, heading, text, linkUrl, linkText }) {
  return (
    <Container fluid className={styles.carouselTextSection}>
      <Row className="align-items-center">
        {/* Left Column: Text */}
        <Col md={6} className="p-5">
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{text}</p>
          <div className="text-end mt-4">
            <Link href={linkUrl} className={styles.linkStyle}>
              {linkText}
            </Link>
          </div>
        </Col>

        {/* Right Column: Carousel */}
        <Col md={6} className={styles.carouselCol}>
          <Carousel interval={3000} className={styles.customCarousel} controls indicators={false} fade>
            {images.map((imgSrc, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={imgSrc} alt={`Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
