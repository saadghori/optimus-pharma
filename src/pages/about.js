// pages/about.js
import Head from 'next/head';
import Hero from '@/components/Hero';
import ImageTextSection from '@/components/ImageTextSection';
import FeatureCards from '@/components/FeatureCards';
import CarouselTextSection from '@/components/CarouselTextSection';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/About.module.css';

const features = [
  {
    icon: '/medical-research.png',
    altText: 'State-of-the-art research equipment',
    title: 'Cutting-Edge Technology',
    description: 'We utilize top-tier equipment to ensure the highest standards in our research and production processes.',
  },
  {
    icon: '/help-desk.png',
    altText: 'Responsive customer support team',
    title: 'Outstanding Support',
    description: 'Our dedicated support team is always ready to assist, ensuring you receive expert help when needed.',
  },
  {
    icon: '/ribbon.png',
    altText: 'Award-winning quality products',
    title: 'Unmatched Quality',
    description: 'Recognized for excellence, our products set industry benchmarks in quality and reliability.',
  },
  {
    icon: '/data-science.png',
    altText: 'Advanced data analytics for research',
    title: 'Innovative Research',
    description: 'Harnessing data-driven insights, we continuously innovate to deliver groundbreaking healthcare solutions.',
  },
];

const About = () => {
  return (
    <div>
      <Head>
        <title>About - Optimus Laboratories</title>
      </Head>

      {/* Hero Section - Added priority prop for fast loading */}
      <Hero
        imageSrc="/DJI_0159.jpg"
        imageAlt="Optimus Factory"
        heading="Our Passion. Your Health."
        text="At Optimus Laboratories we provide pharmaceutical solutions that make a lasting impact"
        buttonText="DOWNLOAD CATALOGUE"
        buttonLink="/Optimus-Catalogue.pdf" 
        isDownload={true}
        overlayOpacity={0.70}
        overlayColor='rgba(31, 33, 53, 1)'
        showOverlay={true}
        priority={true} 
      />

      <ImageTextSection
        imageSrc="/working-guy.jpg"
        imageAlt="Our Story"
        heading="Our Story"
        text="The Optimus journey began in 2013, when a group of visionary friends united to redefine healthcare in Pakistan. While Optimus Pharma focused on specialized pharmaceuticals and Optimus Entrepôt pioneered optical device imports, the vision continued to grow. Finally, in 2025, that vision expanded into Optimus Laboratories. As the manufacturing arm of the group, we are built on a foundation of experience and deep market insight, merging our expertise to turn accessible healthcare into reality."
      />

      <div className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          To manufacture and deliver life-changing pharmaceutical products that bridge the gap between quality and affordability, ensuring that the gift of sight and health is accessible to everyone, everywhere.
        </p>
      </div>

      <div className={styles.whyChooseUsSection}>
        <h2 style={{ color: '#ff7823', textAlign: 'center', marginBottom: '0.15rem', fontSize: '2.2rem' }}>
          Why Choose Us?
        </h2>
        <FeatureCards features={features} />
      </div>

      <div className={styles.carouselTextSection}>
        <CarouselTextSection
          images={['/factory/reception2.jpg', '/DSC07715.jpg', '/FZP03176.jpg', '/factory/labeq1.jpg', '/FZP03225.jpg', '/FZP03166.jpg']}
          heading="World-Class Facilities for Unmatched Innovation"
          text="Our advanced laboratories and cutting-edge machinery empower breakthrough pharmaceutical research and development. Equipped with the latest technology, our facilities ensure precision, efficiency, and quality at every stage of production."
          linkUrl="/facility"
          linkText="Learn more >"
        />
      </div>

      <CTABanner />
    </div>
  );
};

export default About;