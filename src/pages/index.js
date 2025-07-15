import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import FeatureCards from '../components/FeatureCards';
import ImageTextSection from "../components/ImageTextSection";
import CTABanner from '@/components/CTABanner';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import CarouselTextSection from '@/components/CarouselTextSection';
import AnimatedTextSection from '@/components/AnimatedTextSection';

const Home = () => {
    const features = [
    {
      icon: '/medical-team.png',
      altText: 'Medical Team',
      title: 'Expert Medical Team',
      description: 'Our team of dedicated ophthalmologists and researchers work tirelessly to ensure the highest standards of eye care.',
    },
    {
      icon: '/eye-examination.png',
      altText: 'Eye Examination',
      title: 'Comprehensive Exams',
      description: 'We offer full-spectrum eye examinations using modern diagnostic tools to detect and manage vision disorders early.',
    },
    {
      icon: '/eye-drop.png',
      altText: 'Eye Drop',
      title: 'Advanced Treatments',
      description: 'Our innovative formulations are developed to target complex eye conditions with precision and minimal discomfort.',
    },
    {
      icon: '/medical-report.png',
      altText: 'Medical Report',
      title: 'Detailed Reports',
      description: 'Each consultation is supported by detailed medical reports to help patients and providers make informed decisions.',
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
        <title>Optimus Laboratories - Your Trusted Partner in Ophthalmic Medicine</title>
      </Head>

      {/* Hero Section */}
      <Hero
        imageSrc="/glasseskid.jpg"
        imageAlt="Eye care background"
        heading="Clear Vision, Brighter Future"
        text="Committed to advanced eye care and responsible innovation that empowers every life."
        buttonText="GET IN TOUCH"
        overlayOpacity={0.83}
      />

      {/* ImageTextSection */}
      <ImageTextSection
        imageSrc="/factory2.jpg"
        imageAlt="About Optimus Pharma"
        heading="Leaders in Innovation"
        text="Optimus Laboratories is a pioneer in ophthalmic pharmaceuticals, combining research, technology, and global partnerships to develop life-changing treatments. Our state-of-the-art manufacturing ensures every product meets rigorous safety and efficacy standards."
      />

      {/* Features Section */}
      <FeatureCards features={features} />

      {/* Stats Section */}
      <StatsSection />

      {/* New CarouselTextSection*/}
      <CarouselTextSection
        images={productImages}
        heading="Discover Our Range of Ophthalmic Products"
        text="We offer a variety of eye care solutions, from anti-inflammatory drops to advanced lubricants, each designed to support healthy vision and patient comfort."
        linkUrl="/products"
        linkText="Explore >"
        carouselHeight="620px"        
        carouselHeightMobile="435px"
      />

      <AnimatedTextSection
        heading="We Tirelessly Deliver Accessible, High-Quality Eye Medicine "
        text="At Optimus Pharma, we work tirelessly to research and develop the highest quality eye medicines, making them accessible to all. Driven by a deep commitment to your vision and well-being, we blend cutting-edge science with genuine care to deliver solutions that transform lives."
      />

      {/* Partners Section */}
      <Container className="mb-5 pb-4">
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

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
};

export default Home;
