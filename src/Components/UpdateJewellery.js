import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Container, CssBaseline, Typography, CircularProgress,  } from '@mui/material';
import { jewelleryService } from '../Services/Api';

const UpdateJewellery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jewelleryData, setJewelleryData] = useState({
    id: '',
    name: '',
    image: '',
    material: null,
    description: '',
    weight: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchJewelleryData = () => {
    jewelleryService
      .getJewelleryById(id)
      .then((response) => {
        console.log(response);
        const { id, name, image, material, description, weight } = response;
        setJewelleryData({
          id,
          name,
          image,
          material,
          description,
          weight,
        });
        setIsLoading(false); // Mark the loading as complete
      })
      .catch((error) => {
        console.error('Error fetching jewellery data:', error);
        setIsLoading(false); // Mark the loading as complete even in case of error
      });
  };

  useEffect(() => {
    fetchJewelleryData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJewelleryData((prevJewelleryData) => ({
      ...prevJewelleryData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    jewelleryService
      .updateJewellery(id, jewelleryData)
      .then(() => {
        alert('Jewellery updated successfully');
        navigate('/admin');
      })
      .catch((error) => {
        console.error('Error updating jewellery:', error);
      });
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png'),linear-gradient(90deg, #2196F3, #6EC6FF)",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            p: 2,
            bgcolor: '#e0e0e0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'relative', // Add position relative for containing the loading indicator
          }}
        >
          {isLoading && (
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              zIndex={1}
              display="flex"
              justifyContent="center"
            >
              < CircularProgress/> {/* Display loading progress indicator */}
              <Typography sx={{ml:"10px",mt:"10px"}}>Loading...</Typography>
            </Box>
          )}
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mt: 2, mb: 2, color: '#1976d2' }}>
            Update Jewellery
          </Typography>
          {/* Update Jewellery form */}
          <TextField
            name="name"
            value={jewelleryData.name}
            onChange={handleInputChange}
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          {/* <TextField
            name="image"
            value={jewelleryData.image || ''}
            onChange={handleInputChange}
            label="Image"
            variant="outlined"
            margin="normal"
            fullWidth
          /> */}
          <TextField
            name="material"
            value={jewelleryData.material || ''}
            onChange={handleInputChange}
            label="Material"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="description"
            value={jewelleryData.description}
            onChange={handleInputChange}
            label="Description"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="weight"
            value={jewelleryData.weight}
            onChange={handleInputChange}
            label="Weight"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          {/* Submit button */}
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, mb: 2 }} onClick={handleSubmit}>
            Update Jewellery
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default UpdateJewellery;
