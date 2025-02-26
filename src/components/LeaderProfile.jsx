import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/LeaderProfile.module.css';

export default function LeaderProfile({
  imageSrc,
  designation,
  name,
  description,
  imagePosition = 'left',
}) {
  return (
    <div className={styles.leaderProfile}>
      <Row className="align-items-center g-5">
        {/* Image Column - Always First in DOM */}
        <Col md={6} className={imagePosition === 'right' ? 'order-md-2' : 'order-md-1'}>
          <div className="text-center">
            <Image
              src={imageSrc}
              alt={name}
              width={375}
              height={375}
              className={styles.roundImage}
            />
          </div>
        </Col>
        {/* Text Column - Position Adjusted Based on imagePosition */}
        <Col md={6} className={imagePosition === 'right' ? 'order-md-1' : 'order-md-2'}>
          <p className={styles.designation}>{designation}</p>
          <h2 className={styles.heading}>{name}</h2>
          <p className={styles.text}>{description}</p>
        </Col>
      </Row>
    </div>
  );
}