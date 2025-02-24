import Hero from '@/components/Hero';
import ImageTextSection from '@/components/ImageTextSection';
import FeatureCards from '@/components/FeatureCards';
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
      {/* Hero Section */}
      <Hero
        imageSrc="/happyguy.jpg"
        imageAlt="Happy person"
        heading="Our Passion. Your Health."
        text="Optimus Pharma is dedicated to providing pharmaceutical solutions that make a lasting impact."
        buttonText="OUR LEADERSHIP"
        overlayOpacity={0.45}
        buttonLink="/leadership"
      />

      {/* Image Text Section */}
      <ImageTextSection
        imageSrc="/working-guy.jpg"
        imageAlt="A professional working"
        heading="Our Responsibility"
        text="At Optimus Pharma, we believe in the power of innovation, ethical practices, and sustainability. Our responsibility extends beyond producing high-quality pharmaceuticals—we strive to enhance global healthcare accessibility, maintain strict compliance with industry standards, and support communities through research and development initiatives. By fostering a culture of integrity and continuous improvement, we are committed to making a meaningful impact on the well-being of people worldwide."
      />

      {/* Our Mission Section */}
      <div className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          At Optimus Pharma, our mission is to transform healthcare by delivering innovative pharmaceutical solutions that enhance quality of life. We are committed to research-driven advancements, ensuring accessibility to safe and effective medications, and fostering a healthier world. Through continuous innovation and unwavering dedication, we aim to redefine industry standards and positively impact communities globally.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyChooseUsSection}>
        <h2 style={{ color: '#ff7823', textAlign: 'center', marginBottom: '0.15rem', fontSize: '2.2rem' }}>
          Why Choose Us?
        </h2>
        <FeatureCards features={features} />
      </div>
      <CTABanner />
    </div>
  );
};

export default About;
