import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor:"#FFD700", py: '3rem', color: '#000' }}>
      <Container maxWidth="md">
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb: '2rem',flexDirection:{md:'row',xs:'column'} }}>
          <Typography variant='h6' sx={{ mr: '1rem' }}>
            Connect with us on social media:
          </Typography>
          <Box display="flex">
            <Box component="a" href="https://www.linkedin.com/in/rashid-hussain-9b737b1b0/" target="_blank" rel="noopener noreferrer" sx={{ mr: '1rem' }}>
              <img src="/Assets/linkedIn.png" alt="LinkedIn" maxWidth="20px"height="40px"/>
            </Box>
            <Box component="a" href="https://github.com/RashidHussain786" target="_blank" rel="noopener noreferrer" sx={{ mr: '1rem' }}>
              <img src="/Assets/github.png" alt="GitHub" maxWidth="20px"height="40px"/>
            </Box>
            <Box component="a" href="https://leetcode.com/Rashid_Hussain_1/" target="_blank" rel="noopener noreferrer">
              <img src="/Assets/LeetCode.png" alt="LeetCode" maxWidth="20px"height="40px"/>
            </Box>
          </Box>
        </Box>
        <Typography variant='body1' align='center'>
          Made with ❤️ by Rashid Hussain &copy; {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
