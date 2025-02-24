import { Button, Container, Stack, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import FeatureCards from '../components/FeatureCards';
import ImageTextSection from "../components/ImageTextSection";
import CTABanner from '@/components/CTABanner';

const Home = () => {
  const features = [
    {
      icon: '/medical-team.png',
      altText: 'Medical Team',
      title: 'Expert Medical Team',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
    },
    {
      icon: '/eye-examination.png',
      altText: 'Eye Examination',
      title: 'Comprehensive Exams',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
    },
    {
      icon: '/eye-drop.png',
      altText: 'Eye Drop',
      title: 'Advanced Treatments',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      icon: '/medical-report.png',
      altText: 'Medical Report',
      title: 'Detailed Reports',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative',
        width: '100%',
        height: '100vh'
      }}>
        <Image
          src="/hero-image.jpg"
          alt="Eye care background"
          fill
          priority
          quality={80}
          style={{
            objectFit: 'cover',
            zIndex: 0
          }}
        />

        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
          zIndex: 1
        }} />

        {/* Hero Content */}
        <Container style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          color: 'white'
        }}>
          <Stack 
            gap={3} 
            className="h-100 justify-content-center align-items-center text-center"
          >
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
              Innovative Solutions in Eye Care
            </h1>
            <p style={{ fontSize: '1.75rem', maxWidth: '600px' }}>
              Delivering advanced pharmaceutical products to improve vision and enhance lives.
            </p>
            <Link href="/contact" passHref>
              <Button 
                variant="primary" 
                size="lg"
                style={{ 
                  backgroundColor: '#ff7823',
                  borderColor: '#ff7823',
                  padding: '0.75rem 1.25rem',
                  fontSize: '1.1rem'
                }}
              >
                Get in Touch
              </Button>
            </Link>
          </Stack>
        </Container>
      </div>

      {/* Features Section - Now appears below hero */}
      <FeatureCards features={features} />

      {/* Partners Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4" style={{ color: '#ff7823' }}>
          Our Partners
        </h2>
        <Row className="justify-content-center align-items-center g-4">
          <Col xs={6} md={2} className="text-center">
            <Image
              src="/lens-tech.jpg"
              alt="Lens Tech"
              width={120}
              height={80}
              className="img-fluid img-partner"
            />
          </Col>
          <Col xs={6} md={2} className="text-center">
            <Image
              src="/miray.jpg"
              alt="Miray"
              width={120}
              height={80}
              className="img-fluid img-partner"
            />
          </Col>
          <Col xs={6} md={2} className="text-center">
            <Image
              src="/sav-iol.jpg"
              alt="Sav IOL"
              width={120}
              height={80}
              className="img-fluid img-partner"
            />
          </Col>
          <Col xs={6} md={2} className="text-center">
            <Image
              src="/zaracom.jpg"
              alt="Zaracom"
              width={120}
              height={80}
              className="img-fluid img-partner"
            />
          </Col>
          <Col xs={6} md={2} className="text-center">
            <Image
              src="/alsanza.jpg"
              alt="Alsanza"
              width={120}
              height={80}
              className="img-fluid img-partner"
            />
          </Col>
        </Row>
      </Container>

      <div>
        <ImageTextSection
          imageSrc="/equipment.jpg"
          imageAlt="About Optimus Pharma"
          heading="Leaders in Innovation"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        </div>
        <CTABanner />
    </div>
  );
};

export default Home;