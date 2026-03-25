import React, { useState } from 'react';
import Image from 'next/image';

const ProductTable = ({ products, marketType }) => {
  const [modalImage, setModalImage] = useState(null);
  
  // Logic to check if this is an export table
  const isExport = marketType === 'export';

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  const tableStyles = {
    container: {
      width: '100%',
      overflowX: 'auto',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      marginBottom: '2rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: '600px',
      tableLayout: 'fixed',
    },
    th: {
      backgroundColor: '#ff7823',
      color: '#fff',
      padding: '0.4rem 0.8rem',
      textAlign: 'left',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      lineHeight: '1.2',
    },
    td: {
      padding: '0.8rem 0.8rem',
      borderBottom: '1px solid #e0e0e0',
      textAlign: 'left',
      verticalAlign: 'middle',
      wordWrap: 'break-word',
      fontSize: '0.85rem',
    },
    tr: {
      transition: 'background-color 0.2s',
    },
    button: {
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      padding: '0.4rem 0.8rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.2s',
      fontSize: '0.75rem',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      cursor: 'pointer',
    },
    modalContent: {
      position: 'relative',
      width: '380px',
      height: '420px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '1rem',
      boxSizing: 'border-box',
    },
    modalImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    closeButton: {
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
      color: '#000',
      fontSize: '1.5rem',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent',
    },
  };

  return (
    <div style={tableStyles.container}>
      <table style={tableStyles.table}>
        <thead>
          <tr>
            {/* Conditional Product Name Header */}
            {!isExport && <th style={{ ...tableStyles.th, width: '25%' }}>Product Name</th>}
            
            {/* Adjusted widths for Export vs Domestic */}
            <th style={{ ...tableStyles.th, width: isExport ? '50%' : '35%' }}>Active Ingredients</th>
            <th style={{ ...tableStyles.th, width: isExport ? '15%' : '10%' }}>Pack Size</th>
            <th style={{ ...tableStyles.th, width: isExport ? '20%' : '18%' }}>Nature</th>
            <th style={{ ...tableStyles.th, width: isExport ? '15%' : '12%' }}></th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} style={tableStyles.tr}>
              {/* Conditional Product Name Cell */}
              {!isExport && <td style={tableStyles.td}>{product.name}</td>}
              
              <td style={tableStyles.td}>{product.activeIngredients}</td>
              <td style={tableStyles.td}>{product.packSize}</td>
              <td style={tableStyles.td}>{product.nature}</td>
              <td style={tableStyles.td}>
                {product.image && (
                  <button
                    style={tableStyles.button}
                    onClick={() => openModal(product.image)}
                  >
                    View Product
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalImage && (
        <div style={tableStyles.modalOverlay} onClick={closeModal}>
          <div style={tableStyles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={tableStyles.closeButton} onClick={closeModal}>&times;</button>
            <Image
              src={modalImage}
              alt="Product Image"
              width={380}
              height={420}
              style={tableStyles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;