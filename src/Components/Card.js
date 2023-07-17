import React from 'react';
import { Box, Typography } from '@mui/material';

const SmallCard = ({ image, name, description }) => {
  const cardColor = '#000000';
  const backgroundColor = '#FFD700';

  return (
    <Box
      sx={{
        width: '250px',
        height: '300px',
        mb:{md:0,xs:4},
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
      <img src={image} alt="Card Image" style={{ width: '70%', height: '120px', objectFit: 'fill' }} />
      <Typography variant="h6" sx={{ mt: '1rem' }}>
        {name}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center' ,mt:'1rem'}}>
        {description}
      </Typography>
    </Box>
  );
};

export default SmallCard;
