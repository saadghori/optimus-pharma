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
      title: 'Expert Laboratory Team',
      description: 'Our team of pharmacologists, chemists, and quality assurance experts work tirelessly to ensure the highest standards in pharmaceutical manufacturing and innovation.',
    },
    {
      icon: '/eye-examination.png',
      altText: 'Eye Examination',
      title: 'High-Grade Equipment',
      description: 'We ensure purity and compliance in every batch. Our facility features sterile filling lines with laminar airflow, specialized ointment mixers, controlled cleanrooms, and laser printing for traceability.',
    },
    {
      icon: '/eye-drop.png',
      altText: 'Eye Drop',
      title: 'Advanced Formulations',
      description: 'Our innovative formulations are developed in-house using rigorous R&D processes to target complex eye and ENT conditions with superior efficacy and safety.',
    },
    {
      icon: '/medical-report.png',
      altText: 'Medical Report',
      title: 'Proven Patient Effectiveness',
      description: 'The effectiveness of our medications is validated through real-world patient outcomes, and clinical feedback showing significant improvements in relief and recovery for millions of patients.',
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
        heading="Innovating for a Global Vision"
        text={
            <>
              Optimus Laboratories - The manufacturing center of excellence for the Optimus Group.
              <br />
              Delivering world-class Ophthalmic and ENT solutions since 2025.
            </>
          }
        buttonText="CONTACT US"
        overlayOpacity={0.83}
      />

      {/* ImageTextSection */}
      <ImageTextSection
        imageSrc="/factory2.jpg"
        imageAlt="About Optimus Pharma"
        heading="Who We Are"
        text="Born from the legacy of the Optimus Group, Optimus Laboratories represents our latest leap forward. Located in the heart of Lahore, our state-of-the-art manufacturing facility is dedicated to producing high-quality pharmaceutical solutions. From precision-engineered eye drops to advanced nasal sprays, we are bringing the gift of health to both the Pakistani market and the world."
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
        linkUrl="/products/domestic/ophthalmic/eye-drops"
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
