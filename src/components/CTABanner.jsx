// components/CTABanner.js
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const CTABanner = () => {
  return (
    <div className="position-relative" style={{ height: '275px' }}>
      {/* Background Image */}
      <Image
        src="/scientists.jpg"
        alt="Scientists working"
        fill
        priority
        style={{
          objectFit: 'cover',
          zIndex: 0
        }}
      />
      
      {/* Gray Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
      />
      
      {/* Content */}
      <Container className="position-relative h-100 d-flex align-items-center" style={{ zIndex: 2 }}>
        <div className="text-white" style={{ maxWidth: '600px' }}>
          <h2 className="display-6 mb-4 fw-bold">Ready to work with us?</h2>
          <Link href="/contact" passHref>
            <Button 
               variant="primary" 
               size="lg"
              className='btn-custom'
            >
              SEND A MESSAGE
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CTABanner;