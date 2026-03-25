// pages/products/export/ent/ear-drops.js

import React, { useState } from 'react';
import ProductLayout from '@/components/ProductLayout';
import ProductTable from '@/components/ProductTable';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { exportProducts } from '@/data/products';

// 1. Filter for Ear Drops (ENT type and specifically Solutions/Suspensions)
const earDropsOnly = exportProducts.filter(
    p => p.type === 'ent' && (p.nature === 'Solution' || p.nature === 'Suspension')
);

// 2. Build categories - String must match your data file EXACTLY
const productsData = [
    { 
        category: 'Anti-Infectives', 
        products: earDropsOnly.filter(p => p.category === 'ANTI-INFECTIVES') 
    },
    { 
        category: 'Steroids + Anti-Infectives', 
        // FIXED: Added " COMBINATIONS" to the filter to match your data objects
        products: earDropsOnly.filter(p => p.category === 'STEROIDS + ANTI-INFECTIVES COMBINATIONS') 
    },
].filter(section => section.products.length > 0); 

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

function EarDropsPage() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const pathname = usePathname();
    const marketType = "export";

    return (
        <ProductLayout
            title="Ear Drops"
            description="Our range of pharmaceutical ear drops for the export market."
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
            
            {/* Navigation Links */}
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

            {/* Product Sections */}
            {productsData.map(section => (
                <ProductsSection 
                    key={section.category} 
                    category={section.category} 
                    products={section.products} 
                    marketType={marketType} 
                />
            ))}
        </ProductLayout>
    );
}

export default EarDropsPage;