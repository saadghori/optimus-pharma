// components/CarouselTextSection.jsx
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import styles from '@/styles/CarouselTextSection.module.css';
import Link from 'next/link';

export default function CarouselTextSection({
  images,
  heading,
  text,
  linkUrl,
  linkText,
  carouselHeight,
  carouselHeightMobile
}) {
  const carouselStyle = {
    '--carousel-height': carouselHeight,
    '--carousel-height-mobile': carouselHeightMobile || carouselHeight,
  };

  return (
    <div className={styles.sectionWrapper}>
      <Container className="my-5 mb-4 pb-3 py-4">
        <Row className="align-items-center g-5">
          {/* Left Column: Text Section */}
          <Col md={6}>
            <div className={styles.textContainer}>
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.text}>{text}</p>
              <div className="text-end mt-4">
                <Link href={linkUrl} className={styles.linkStyle}>
                  {linkText}
                </Link>
              </div>
            </div>
          </Col>

          {/* Right Column: Carousel Section */}
          <Col md={6} className={styles.carouselCol}>
            <Carousel
              interval={3000}
              className={styles.customCarousel}
              controls
              indicators={false}
              fade
              style={carouselStyle}
            >
              {images.map((imgSrc, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 rounded-3"
                    src={imgSrc}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
