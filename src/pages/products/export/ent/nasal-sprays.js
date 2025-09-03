// pages/products/export/ent/nasal-sprays.js

import React, { useState } from 'react';
import ProductLayout from '@/components/ProductLayout';
import ProductTable from '@/components/ProductTable';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { exportProducts } from '@/data/products';

// First, filter for only Nasal Sprays
const nasalSpraysOnly = exportProducts.filter(
    p => p.nature === 'Nasal Spray'
);

// Then, build the categories from the filtered Nasal Sprays list
const productsData = [
    { category: 'Steroids', products: nasalSpraysOnly.filter(p => p.category === 'STEROIDS') },
    { category: 'Anti-Allergy', products: nasalSpraysOnly.filter(p => p.category === 'ANTI-ALLERGY') },
    { category: 'Steroids + Anti-Allergy', products: nasalSpraysOnly.filter(p => p.category === 'STEROIDS + ANTI-ALLERGY') },
].filter(section => section.products.length > 0); // Only show categories that have nasal sprays


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

function NasalSpraysPage() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const pathname = usePathname();
    const marketType = "export";

    return (
        <ProductLayout
            title="Nasal Sprays"
            description="Our range of pharmaceutical nasal sprays."
        >
            <h3 style={{
                textAlign: 'center',
                color: '#ff7823',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '2px',
                marginBottom: '1rem',
                marginTop: '-1rem'
            }}>Export</h3>
            
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
                                <span style={{
                                    color: '#e0e0e0',
                                    margin: '0 0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    |
                                </span>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            {productsData.map(section => (
                <ProductsSection key={section.category} category={section.category} products={section.products} marketType={marketType} />
            ))}
        </ProductLayout>
    );
}

export default NasalSpraysPage;