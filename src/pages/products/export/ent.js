// pages/products/export/ent.js

import React from 'react';
import ProductLayout from '@/components/ProductLayout';

function EntPage() {
  return (
    <ProductLayout
      title="ENT"
      description="Our range of pharmaceutical ENT products for the export market."
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
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#ff7823'
        }}>
          Coming Soon...
        </p>
      </div>
    </ProductLayout>
  );
}

export default EntPage;