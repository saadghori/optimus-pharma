import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cardStyles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    backgroundColor: '#ffffff',
    margin: '1rem',
    maxWidth: '300px',
    flex: '1 1 300px',
    height: '450px',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  contentArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '200px',
    marginBottom: '3rem',
  },
  details: {
    width: '100%',
    textAlign: 'left',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: '#ff7823',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: '0.875rem',
    color: '#555',
    marginBottom: '0.5rem',
  },
  button: {
    backgroundColor: '#ff7823',
    color: '#fff',
    border: 'none',
    padding: '0.60rem 0',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    position: 'relative',
    top: '2rem',
  },
};

const ProductCard = ({ product, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ ...cardStyles.card, ...(isHovered ? { transform: 'translateY(-5px)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' } : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardStyles.imageContainer}>
        <Image
          src={product.image || '/placeholder-medicine.png'}
          alt={product.name}
          width={200}
          height={200}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div style={cardStyles.contentArea}>
        <div style={cardStyles.details}>
          <div style={cardStyles.title}>{product.name}</div>
          <p style={{ margin: '0' }}><span style={cardStyles.label}>Active Ingredients:</span> <span style={cardStyles.value}>{product.activeIngredients}</span></p>
          <p style={{ margin: '0' }}><span style={cardStyles.label}>Pack Size:</span> <span style={cardStyles.value}>{product.packSize}</span></p>
          <p style={{ margin: '0' }}><span style={cardStyles.label}>Nature:</span> <span style={cardStyles.value}>{product.nature}</span></p>
        </div>
        <Link
          href={href}
          style={{ ...cardStyles.button, ...(isHovered ? { backgroundColor: '#e66a1a' } : {}) }}
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;