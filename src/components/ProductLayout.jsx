// components/ProductLayout.js
import React from 'react';
import Head from 'next/head';

const ProductLayout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>{title}</h1>
        </header>
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default ProductLayout;