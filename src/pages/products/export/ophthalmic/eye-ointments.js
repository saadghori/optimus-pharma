import React, { useState } from 'react';
import ProductLayout from '@/components/ProductLayout';
import ProductTable from '@/components/ProductTable';
import Link from 'next/link';
import { exportProducts } from '@/data/products';

// 1. Filter all ointments from the main product list
const allOintments = exportProducts.filter(p => p.nature === 'Ointment');

// 2. Define the categories and filter products for each
const productsData = [
  { category: 'Lubricant', products: allOintments.filter(p => p.category === 'LUBRICANT') },
  { category: 'Anti-Biotics', products: allOintments.filter(p => p.category === 'ANTI-BIOTICS') },
  { category: 'Anti-Viral', products: allOintments.filter(p => p.category === 'ANTI-VIRAL') },
  { category: 'Steroids', products: allOintments.filter(p => p.category === 'STEROIDS') },
  { category: 'Steroids + Anti-Infectives Combinations', products: allOintments.filter(p => p.category === 'STEROIDS + ANTI-INFECTIVES COMBINATIONS') },
].filter(section => section.products.length > 0); // Ensure we only show categories that have products

// Reusable component to display a category section
const ProductsSection = ({ category, products, marketType }) => (
  <section id={category.replace(/\s|[+]/g, '-')} style={{ marginBottom: '3rem' }}>
    <h2 style={{
      color: '#ff7823',
      borderBottom: '2px solid #ff7823',
      paddingBottom: '0.5rem',
      marginBottom: '1.5rem',
      fontSize: '1.25rem'
    }}>{category}</h2>
    <ProductTable products={products} marketType={marketType} />
  </section>
);

function EyeOintmentsPage() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const marketType = "export";

  return (
    <ProductLayout
      title="Eye Ointments"
      description="Our range of pharmaceutical eye ointments for the export market."
    >
      <h3 style={{
        textAlign: 'center',
        color: '#ff7823',
        textTransform: 'uppercase',
        fontSize: '1rem',
        letterSpacing: '2px',
        marginBottom: '1rem',
        marginTop: '-1rem'
      }}>Export</h3>

      {/* Category Navigation Links */}
      <div style={{
        marginBottom: '2rem',
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: '1',
      }}>
        {productsData.map((section, index) => {
          const href = `#${section.category.replace(/\s|[+]/g, '-')}`;
          const isHovered = hoveredLink === section.category;
          const isLastItem = index === productsData.length - 1;

          return (
            <React.Fragment key={section.category}>
              <Link
                href={href}
                style={{
                  margin: '0.5rem 1rem',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                  color: isHovered ? '#ff7823' : '#333'
                }}
                onMouseEnter={() => setHoveredLink(section.category)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => setHoveredLink(null)}
              >
                {section.category}
              </Link>
              {!isLastItem && (
                <span style={{ color: '#e0e0e0', margin: '0 0.5rem', fontSize: '0.9rem' }}>|</span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Product Sections */}
      {productsData.map(section => (
        <ProductsSection key={section.category} category={section.category} products={section.products} marketType={marketType} />
      ))}
    </ProductLayout>
  );
}

export default EyeOintmentsPage;