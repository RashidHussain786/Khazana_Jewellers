import React, { forwardRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const ContactSection = forwardRef((props, ref) => {
  const theme = useTheme();

  return (
    <Box
      ref={ref} // Assign the ref here
      display="flex"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        bgcolor: '#000',
        color: '#FFD700',
      }}
    >
      {/* Contact us */}
      <Typography variant="h4" sx={{ my: {md:4,xs:1}}}>
        Contact Us
      </Typography>

      <Box
        display="flex"
        sx={{
          flexDirection: { md: 'row', xs: 'column' },
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Contact Details Section */}
        <Box
          width="100%" // Full width on xs screens
          maxWidth={{ md: '50%' }} // Half width on md screens and above
          sx={{
            backgroundColor: '#000',
            color: '#FFD700',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '1rem', md: '2rem' }, // Different padding on xs and md screens
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="h4">Location</Typography>
          <Typography sx={{ pt: 1 }}>Address: Shree Radha Rani Complex near sardarganj Masjid</Typography>
          <Typography>City: DalsinghSarai</Typography>
          <Typography>Country: India</Typography>

          <Typography variant="h4">Mobile</Typography>
          <Typography sx={{ pt: 1 }}>Phone: 9354503839</Typography>
          <Typography sx={{ pt: 1 }}>Phone: 8877699552</Typography>

          <Typography variant="h4">Email</Typography>
          <Typography sx={{ pt: 1 }}>Email: amjaddss3@gmail.com</Typography>
        </Box>
        {/* Google Map Section */}
        <Box
          width="100%" // Full width on xs screens
          maxWidth={{ md: '50%' }} // Half width on md screens and above
          height="400px"
          mb={4}
          sx={{
            backgroundColor: '#f1f1f1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '1rem', md: '2rem' }, // Different padding on xs and md screens
            boxSizing: 'border-box',
          }}
        >
          {/* Add your Google Map component here */}
          <img
            src={`${process.env.PUBLIC_URL}/Assets/map1.png`}
            alt="Youth Collection"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Box>
    </Box>
  );
});

export default ContactSection;
