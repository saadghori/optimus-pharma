import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'; // Use next/image for rendering
import styles from '@/styles/CardGrid.module.css';
import { useState, useEffect } from 'react';

export default function CardGrid({ items }) {
  return (
    <Container className="my-5">
      <Row className="g-4">
        {items.map((item, index) => {
          const [isImageLoaded, setIsImageLoaded] = useState(false); 

          
          useEffect(() => {
            const img = new window.Image();
            img.src = item.image;
            img.onload = () => setIsImageLoaded(true);
            return () => {
              img.onload = null;
            };
          }, [item.image]);

          return (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div className={styles.cardWrapper}>
                {/* Skeleton Loader */}
                {!isImageLoaded && <div className={styles.skeleton} />}
                {/* Actual Image */}
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                  className={styles.cardImage}
                  onLoadingComplete={() => setIsImageLoaded(true)} 
                  style={{ display: isImageLoaded ? 'block' : 'none' }} 
                />
                <div className={styles.overlay}>
                  <h5>{item.heading}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}