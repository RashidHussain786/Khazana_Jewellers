import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  let navigate=useNavigate();
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#000000',flexDirection:{xs:'column',md:'row'}, color: '#FFD700'}}>
      <Box sx={{ flex: '6', mt:{xs:6}, padding: { xs: '1rem', md: '2rem' },display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center',alignSelf:'center' }}>
        <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
          JEWEELRY
        </Typography>
        <Typography variant="h2" sx={{ marginBottom: '1rem',textAlign:'center' }}>
          Shine Bright With Khazana Jewellers.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '2rem',textAlign:'center' }}>
          Every day is your special day with our fine jewelry!
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '2rem' ,textAlign:'center'}}>
         Explore our stunning collection and find the perfect piece for any occasion.
       </Typography>
        <Button  sx={{ color: '#000', bgcolor: '#FFD700', marginRight: '1rem', '&:hover': { bgcolor: '#FFC800' } }}onClick={()=>{navigate('/signup')}}>
                Register For Free
              </Button>
      </Box>
      <Box
  sx={{
    flex: '7',
    backgroundColor: '#FFD700',
    position: 'relative',
    borderRadius: '0 0 0 100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  {/* Place your image here */}
  <img
    src="./Assets/Headers.png"
    alt="Header Image"
    style={{
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      marginTop: '50px',
      transform: 'scale(1.2)', 
    }}
  />
</Box>
</Box>
  );
};

export default Header;
