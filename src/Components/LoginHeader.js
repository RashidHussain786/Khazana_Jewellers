import React, { useState } from 'react';
import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authService } from '../Services/Api';

const LoginHeader = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = async () => {
    setError(null); // clear the previous error
    try {
      const response = await authService.login(userData);

      const token = response.token;
      localStorage.setItem('token', token);

      // Extract the username from the email and store it in localStorage
      const email = userData.email;
      const username = email.substring(0, email.indexOf('@')).trim();
      localStorage.setItem('username', username);

      setSuccess('Login Successful');
      // Check the role and navigate accordingly
      if (response.role === 'Admin') {
        navigate('/admin');
      } else {
        navigate('/product');
      }
    } catch (error) {
      setError('Error: ' + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          height: '100vh',
          backgroundColor: '#000000',
          color: '#000',
        }}
      >
        <Box
          sx={{
            flex: '6',
            padding: { xs: '1rem', md: '2rem' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                p: 2,
                mt:{xs:6},
                bgcolor: '#c7c6c1',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#000',
                  },
                  '&:hover fieldset': {
                    borderColor: '#000',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#000',
                  },
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                },
                '& .MuiInputLabel-outlined.Mui-focused': {
                  color: '#000',
                },
              }}
            >
              <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mt: { xs: '20px', md: '20px' }, mb: 2, color: '#000',textAlign:'center' }}>
                Login
              </Typography>

              <TextField
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
              />

              <TextField
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
              />

              <Button
                variant="contained"
                sx={{
                  color: '#000',
                  bgcolor: '#777b7e',
                  mt: '10px',
                  mb: '10px',
                  '&:hover': { bgcolor: '#48494b' },
                }}
                fullWidth
                onClick={handleLogin}
              >
                Login
              </Button>

              <Typography variant="body2" align="center">
                Don't have an account?{' '}
                <a
                  style={{ cursor: 'pointer', color: '#48494b', fontWeight: 'bold' }}
                  onClick={() => {
                    navigate('/signup');
                  }}
                >
                  SignUp
                </a>
              </Typography>
              {success && (
                <Typography variant="body2" align="center" sx={{ color: 'green' }}>
                  {success}
                </Typography>
              )}
              {error && (
                <Typography variant="body2" align="center" sx={{ color: 'red' }}>
                  {error}
                </Typography>
              )}
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            flex: '7',
            backgroundColor: '#FFD700',
            position: 'relative',
            borderRadius: { xs: '0 0 0 100% ', md: '0 0 0 100%' },
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
              marginTop: { xs: '10px', md: '0' },
              transform: 'scale(1.2)',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default LoginHeader;
