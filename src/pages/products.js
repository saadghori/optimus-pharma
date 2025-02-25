import { Container } from 'react-bootstrap';
import CardGrid from '@/components/CardGrid';
import CTABanner from '@/components/CTABanner';

export default function Products() {
  // Array of product items
  const products = [
    {
      image: '/products/Catacrom.jpg',
      heading: 'Catacrom',
      text: 'Helps relieve eye irritation and dryness.'
    },
    {
      image: '/products/Econopred.jpg',
      heading: 'Econopred',
      text: 'Provides anti-inflammatory relief for ocular conditions.'
    },
    {
      image: '/products/Eyepat.jpg',
      heading: 'Eyepat',
      text: 'Soothes tired eyes with gentle hydration.'
    },
    {
      image: '/products/Optibrex.jpg',
      heading: 'Optibrex',
      text: 'Advanced formula for allergy-induced eye discomfort.'
    },
    {
      image: '/products/Optibrex-D.jpg',
      heading: 'Optibrex-D',
      text: 'Dual-action relief from dryness and inflammation.'
    },
    {
      image: '/products/Opticon-A.jpg',
      heading: 'Opticon-A',
      text: 'Targets common eye allergies effectively.'
    },
    {
      image: '/products/Optiket.jpg',
      heading: 'Optiket',
      text: 'Ideal for post-surgery inflammation management.'
    },
    {
      image: '/products/Optim.jpg',
      heading: 'Optim',
      text: 'Enhances overall ocular health with daily use.'
    },
    {
      image: '/products/Taricin.jpg',
      heading: 'Taricin',
      text: 'Antibacterial properties for preventing infections.'
    },
    {
      image: '/products/Timodor.jpg',
      heading: 'Timodor',
      text: 'Manages eye pressure for glaucoma patients.'
    },
    {
      image: '/products/ZeforceSyrup.jpg',
      heading: 'Zeforce Syrup',
      text: 'Boosts eye nutrition and supports healthy vision.'
    },
    {
      image: '/products/ZemagSyrup.jpg',
      heading: 'Zemag III Syrup',
      text: 'Delivers essential vitamins and minerals for eye care.'
    },
    {
      image: '/products/ZemagTablet.jpg',
      heading: 'Zemag III Tablet',
      text: 'Wide-format packaging for convenient dosing.'
    }
  ];

  return (
    <>
      <Container className="py-5 px-4" style={{ backgroundColor: "white" }}>
        {/* Page Title */}
        <h1
          style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.15rem" }}
          className="mb-3"
        >
          Products
        </h1>

        {/* Introductory Text */}
        <p className="mb-4" style={{ color: "black", fontSize: "1.4rem" }}>
          Explore our comprehensive range of ophthalmic solutions designed to meet
          various eye care needs. Each product is formulated to ensure quality,
          effectiveness, and patient comfort.
        </p>

        {/* Render the CardGrid with product data */}
        <CardGrid items={products} />
      </Container>

      <CTABanner />
    </>
);
}
