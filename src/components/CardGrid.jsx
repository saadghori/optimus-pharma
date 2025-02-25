import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from '@/styles/CardGrid.module.css';

export default function CardGrid({ items }) {
  return (
    <Container className="my-5">
      <Row className="g-4">
        {items.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <div className={styles.cardWrapper}>
              <Image
                src={item.image}
                alt={item.heading}
                fluid
                className={styles.cardImage}
              />
              <div className={styles.overlay}>
                <h5>{item.heading}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
