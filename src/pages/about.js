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
        heading="Your health is our passion"
        text="At Optimus Laboratories, we provide pharmaceutical solutions that make a lasting impact."
        buttonText="DOWNLOAD CATALOGUE"
        buttonLink="/Optimus-Catalogue.pdf" 
        isDownload={true}
        overlayOpacity={0.50}
        overlayColor='rgba(31, 33, 53, 1)'
        showOverlay={true}
        priority={true} 
      />

      <ImageTextSection
        imageSrc="/ourstory.jpg"
        imageAlt="Our Story"
        heading="Our Story"
        text={<>Every meaningful journey begins with a small step. The Optimus journey began in 2013, when a group of visionary friends united to redefine healthcare in Pakistan. Putting together a trusted team of qualified professionals, we started Optimus Pharma, a small pharmaceutical marketing venture. Soon after, it became apparent that to truly make a lasting contribution to healthcare, we needed to go beyond marketing.<br/><br/>We set our sights on bridging the gap between global medical innovation and the Pakistani patient. By forging partnerships with leading international pharmaceutical companies, we began our next project, Optimus Entrepôt, to begin introducing world-class treatments in Pakistan, which were previously out of reach for millions. But we learned that providing access was only half the answer.<br/><br/>To create a truly lasting impact, we took our most ambitious step yet — establishing our own manufacturing facility. By producing these globally-proven solutions on home soil, we could ensure that cutting-edge healthcare was not just available in Pakistan, but affordable, sustainable, and built to serve every patient who needed it. With this mission in mind, in 2025, Optimus Laboratories (Pvt.) Ltd. opened its doors.<br/><br/>What started as a vision gradually turned into reality through patience, resilience, and the unwavering trust of our partners. As the manufacturing arm of the group, we are built on a foundation of experience and deep market insight. Today, Optimus Laboratories stands as a symbol of determination, collaboration, and a passion for healthcare. As we move forward, our commitment remains clear: to deliver accessible, high-quality pharmaceutical products to improve the quality of life of our patients.
</>}
      />

      <div className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          To manufacture and deliver trusted, high-quality pharmaceutical products that support eye, ear, and nose health for all, bridging the gap between quality and affordability to ensure that the gift of health is accessible to everyone, everywhere.
        </p>
        <br/>
        <br/>
        <h2>Our Vision</h2>
        <p>
          To be a trusted partner in everyday health care, known for delivering reliable life-changing pharmaceutical solutions that meet real-world eye and ENT needs.
        </p>
        <br/>
        <br/>
        <h2>Core Values</h2>
        <p>
          We strive to continue improving and expanding our efforts through rigorous research, innovation, and the adoption of advanced global technologies.
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
          heading="World-Class Facility for Unmatched Innovation"
          text="Our advanced laboratory and cutting-edge machinery empower breakthrough pharmaceutical research and development. Equipped with the latest state-of-the-art technology, our facility ensures precision, efficiency, and quality at every stage of production."
          linkUrl="/facility"
          linkText="Explore Our Facility >"
        />
      </div>

      <CTABanner />
    </div>
  );
};

export default About;