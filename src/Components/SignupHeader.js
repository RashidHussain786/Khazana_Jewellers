import React, { useState } from 'react';
import { Box, Button, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authService } from '../Services/Api';

const SignupHeader = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    role: 'User', // Default role
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignup = async () => {
    setError(null); // clear the previous error
    try {
      await authService.signup(userData);
      setSuccess('Signup Successful');
      navigate('/login');
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
      <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#000000',flexDirection:{xs:"column",md:'row'}, color: '#000' }}>
        <Box
          sx={{
            flex: '6',
            padding: { xs: '1rem', md: '2rem' },
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
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
              <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mt: { xs: '20px', md: '20px' }, mb: 2, color: '#000', textAlign: 'center' }}>
                Signup
              </Typography>
              <TextField
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                label="Name"
                variant="outlined"
                margin="normal"
                fullWidth
              />
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
              <TextField
                type="password"
                name="passwordConfirmation"
                value={userData.passwordConfirmation}
                onChange={handleInputChange}
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>Role</InputLabel>
                <Select name="role" value={userData.role} onChange={handleInputChange} label="Role">
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                </Select>
              </FormControl>
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
                onClick={handleSignup}
              >
                Signup
              </Button>
              <Typography variant="body2" align="center">
                Already have an account?{' '}
                <a style={{ cursor: 'pointer', color: '#48494b', fontWeight: 'bold' }} onClick={() => navigate('/login')}>
                  Login
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
              marginTop: { xs: '50px', md: '0' },
              transform: 'scale(1.2)',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default SignupHeader;
