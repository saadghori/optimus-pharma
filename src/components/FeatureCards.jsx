import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/FeatureCards.module.css';

const FeatureCards = ({ features }) => {
  return (
    <Container className="my-4 py-5">
      <Row className="g-4">
        {features.map((feature, index) => (
          <Col key={index} md={3} className="d-flex">
            <Card className={`h-100 w-100 p-4 text-center ${styles.featureCard}`}>
              <div className="mb-1 mx-auto" style={{ width: '80px', height: '80px' }}>
                <Image
                  src={feature.icon}
                  alt={feature.altText}
                  width={80}
                  height={80}
                  className="img-fluid"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className={`fs-5 mb-3 ${styles.featureTitle}`}>
                  {feature.title}
                </Card.Title>
                <Card.Text className={styles.featureText}>
                  {feature.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureCards;
