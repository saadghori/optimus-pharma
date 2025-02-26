import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import FeatureCards from '../components/FeatureCards';
import ImageTextSection from "../components/ImageTextSection";
import CTABanner from '@/components/CTABanner';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import CarouselTextSection from '@/components/CarouselTextSection'; // <-- Import the new component

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

  // Carousel images for the new section
  const productImages = [
    '/products/Catacrom.jpg',
    '/products/Opticon-A.jpg',
    '/products/Optibrex.jpg',
    '/products/Optibrex-D.jpg'
  ];

  return (
    <div>
      <Head>
        <title>Optimus Pharma - Innovative Eye Care Solutions</title>
      </Head>

      {/* Hero Section */}
      <Hero
        imageSrc="/hero-image.jpg"
        imageAlt="Eye care background"
        heading="Innovative Solutions in Eye Care"
        text="Delivering advanced pharmaceutical products to improve vision and enhance lives."
        buttonText="SCHEDULE A MEETING"
        overlayOpacity={0.15}
      />

      {/* Features Section */}
      <FeatureCards features={features} />

      {/* Partners Section */}
      <Container className="my-4">
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

      {/* ImageTextSection */}
      <ImageTextSection
        imageSrc="/equipment.jpg"
        imageAlt="About Optimus Pharma"
        heading="Leaders in Innovation"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />

      {/* Stats Section */}
      <StatsSection />

      {/* New CarouselTextSection (AFTER StatsSection) */}
      <CarouselTextSection
        images={productImages}
        heading="Discover Our Range of Ophthalmic Products"
        text="We offer a variety of eye care solutions, from anti-inflammatory drops to advanced lubricants, each designed to support healthy vision and patient comfort."
        linkUrl="/products"
        linkText="Explore >"
      />

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
};

export default Home;
