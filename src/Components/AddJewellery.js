import React, { useState } from 'react';
import { TextField, Button, Box, Container, CssBaseline, Typography } from '@mui/material';
import { jewelleryService } from '../Services/Api';
import { useNavigate } from 'react-router-dom';

const AddJewellery = () => {
  const navigate = useNavigate();
  const [jewelleryData, setJewelleryData] = useState({
    name: '',
    image: null,
    material: '',
    description: '',
    weight: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJewelleryData((prevJewelleryData) => ({
      ...prevJewelleryData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64Data = reader.result;
        setJewelleryData((prevJewelleryData) => ({
          ...prevJewelleryData,
          image: base64Data,
        }));
      };
    }
  };
  

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', jewelleryData.name);
    formData.append('image', jewelleryData.image);
    formData.append('material', jewelleryData.material);
    formData.append('description', jewelleryData.description);
    formData.append('weight', jewelleryData.weight);

    jewelleryService
      .createJewellery(formData)
      .then(() => {
        // Display acknowledgement message
        alert('Jewellery added successfully');

        // Clear the form fields
        setJewelleryData({
          name: '',
          image: null,
          material: '',
          description: '',
          weight: 0,
        });

        navigate('/admin'); // Redirect to /jewelleryList after successful addition
      })
      .catch((error) => {
        console.error('Error adding jewellery:', error);
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
          }}
        >
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mt: 2, mb: 2, color: '#1976d2' }}>
            Add Jewellery
          </Typography>
          {/* Add Jewellery form */}
          <TextField
            name="name"
            value={jewelleryData.name}
            onChange={handleInputChange}
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            type="file"
            name="image"
            onChange={handleFileInputChange}
            label="Image"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="material"
            value={jewelleryData.material}
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
            type="number"
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
            Add Jewellery
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AddJewellery;
