import React from 'react';
import { Box, Typography } from '@mui/material';

const ProductCard = ({ image, name, material, description, weight }) => {
  const cardColor = '#000000';
  const backgroundColor = '#FFC800';

  return (
    <Box
      sx={{
        width: '200px',
        height: '350px',
        backgroundColor,
        color: cardColor,
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <img src={image} alt="Product Image" style={{ width: '200px', height: '200px', objectFit: 'fill' }} />
      <Typography variant="h6" sx={{ marginTop: '1rem' }}>
        {name}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '0.5rem', textAlign: 'center' }}>
        Material: {material}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem', textAlign: 'center' }}>
        {description}
      </Typography>
      <Typography variant="h6">{weight} gram</Typography>
    </Box>
  );
};

export default ProductCard;
