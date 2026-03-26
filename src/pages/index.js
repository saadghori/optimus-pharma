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
      description: 'The effectiveness of our products is validated through real-world patient outcomes and clinical feedback showing significant improvements in relief and recovery for patients.',
    }
  ];

  const productImages = [
    '/products/Catacrom.jpeg',
    '/products/Opticon-A.jpeg',
    '/products/Optibrex.jpeg',
    '/products/Optibrex-D.jpeg'
  ];

  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <Head>
        <title>Optimus Laboratories - Your Trusted Partner in Ophthalmic Medicine</title>
      </Head>

      {/* Hero Section - Priority set to true for fastest load */}
      <Hero
        videoSrc="/OptimusHomepageVid.mp4" 
        imageSrc="/DJI_0157-2.jpg"
        heading="The gift of health"
        text={
          <>
            The manufacturing center of excellence for the Optimus Group,
            <br />
            delivering world-class ophthalmic and ENT solutions.
          </>
        }
        buttonText="LEARN MORE"
        overlayOpacity={0.69}
        showOverlay={true}
        priority={true} 
      />

      <ImageTextSection
        imageSrc="/DSC07699-2.jpg"
        imageAlt="About Optimus Pharma"
        heading="Who We Are"
        text={<>At Optimus, we care about your eye and ENT health. We aim to help people around the world see better and feel better by offering trusted solutions for everyday eye, ear, and nasal care needs. With over 30 years of experience in ophthalmology through our parent company, Optimus Pharma, and the support of a diverse network of highly qualified eyecare professionals, we stay at the forefront of new developments in vision care.<br /><br />Born from the legacy of the Optimus Group, Optimus Laboratories represents our latest leap forward. Located in Punjab, Pakistan, our state-of-the-art manufacturing facility is dedicated to producing high-quality pharmaceutical solutions. Optimus Laboratories offers a wide range of products. From precision-engineered eye drops to advanced nasal sprays, we are bringing the gift of health to both the Pakistani market and the world.</>}      />

      <FeatureCards features={features} />

      <StatsSection />

      <CarouselTextSection
        images={productImages}
        heading="Discover Our Range of Ophthalmic & ENT Products"
        text="We offer a variety of ophthalmic and ENT solutions, from precision-engineered eye drops to advanced nasal sprays, each designed to support patients’ health and comfort."
        linkUrl="/products/domestic/ophthalmic/eye-drops"
        linkText="Explore Products >"
        carouselHeight="620px"         
        carouselHeightMobile="435px"
      />

      <AnimatedTextSection
        heading="We Work Tirelessly to Deliver Accessible, High-Quality Solutions"
        text="Located in Punjab, Pakistan, our state-of-the-art manufacturing facility is dedicated to producing high-quality ophthalmic and ENT pharmaceutical solutions, making them accessible to the Pakistani market. Driven by a deep commitment to your well-being, we blend cutting-edge science with genuine care to deliver medical solutions that transform lives."
        linkUrl="/facility"
        linkText="Explore Facility >"
      />

      <CTABanner />
    </div>
  );
};

export default Home;