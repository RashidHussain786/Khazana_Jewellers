import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const YouthCollection = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      navigate('/product');
    } else {
      alert('Please login to access the collection');
      navigate('/login');
    }
  };

  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:{md:'row',xs:'column'},
        alignItems:'center',
        backgroundColor: '#000000',
        color: '#FFD700',
        padding: '1rem',
        position: 'relative',
      }}
    >
      {/* Left side content */}
      <Box flex="6" pl={4} position="relative">
        <img
          src={`${process.env.PUBLIC_URL}/Assets/Design.png`}
          alt="Youth Collection"
          style={{ width: '80%', height: '80%', objectFit: 'cover' }}
        />
      </Box>

      {/* Right side strips */}
      <Box flex="6" sx={{m:{md:4,xs:1},p:{md:4,xs:1}}} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h1" sx={{mb:2, fontSize: { xs: '3rem', md: '4rem' }}}>
          Our Youth Collection on Sale Now
        </Typography>
        <Typography variant="h5" mb={2}>
          From $199 | Shop the <span style={{ color: '#FFFFFF' }}>Limited</span> Edition
        </Typography>
        <Typography variant="h6" mb={2}>
          This collection was created while thinking about youth and purity. Trendy gold chains in bracelets and necklaces look very delicate. The entire collection is very light, airy, and is a great fit for any occasion.
        </Typography>
        <Button
          sx={{
            color: '#000000',
            bgcolor: '#FFD700',
            marginRight: '1rem',
            '&:hover': { bgcolor: '#FFC800' },
          }}
          onClick={handleDiscoverClick}
        >
          — Discover the collection
        </Button>
      </Box>
    </Box>
  );
};

export default YouthCollection;
