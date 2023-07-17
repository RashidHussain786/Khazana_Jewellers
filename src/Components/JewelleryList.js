import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Box, Container, CssBaseline, Typography, TablePagination, Paper, TableContainer, CircularProgress } from '@mui/material';
import { jewelleryService } from '../Services/Api';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import AddBoxIcon from '@mui/icons-material/AddBox';


const JewelleryList = () => {
  const navigate = useNavigate();
  const [jewellery, setJewellery] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true);


  const fetchJewellery = () => {
    jewelleryService
      .getAllJewellery()
      .then((response) => {
       // console.log(response);
        setJewellery(response);
        setIsLoading(false); // Mark the loading as complete
      })
      .catch((error) => {
        console.error('Error fetching jewellery:', error);
        setIsLoading(false); // Mark the loading as complete
      });
  };

  useEffect(() => {
    fetchJewellery();
  }, []);

  const handleDelete = (jewelleryId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this jewellery?');
    if (confirmDelete) {
      jewelleryService
        .deleteJewellery(jewelleryId)
        .then(() => {
          // Update the jewellery list after successful deletion
          fetchJewellery();
          alert('Jewellery deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting jewellery:', error);
          setIsLoading(false); // Mark the loading as complete
        });
    }
  };

  const handleUpdate = (jewelleryId) => {
    navigate(`/updateJewellery/${jewelleryId}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedJewellery = jewellery.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box
      sx={{
        backgroundImage:"url('https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png'),linear-gradient(90deg, #2196F3, #6EC6FF)",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container component="main" maxWidth="lg">
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
            Jewellery List
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', pl: 6, pr: 6, mb: 4 }}>
            <Button variant="contained" color="primary" startIcon={<AddBoxIcon />} component={Link} to="/addJewellery">
              Add Jewellery
            </Button>
          </Box>
          <TableContainer component={Paper}>
          {isLoading && (
            <Box
              position="absolute"
              top={20}
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
            <Table sx={{ marginBottom: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    ID
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Name
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Material
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Description
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Weight
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedJewellery.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="center" sx={{ border: '1px solid', borderColor: 'divider' }}>
                      {item.id}
                    </TableCell>
                    <TableCell align="center" sx={{ border: '1px solid', borderColor: 'divider' }}>
                      {item.name}
                    </TableCell>
                    <TableCell align="center" sx={{ border: '1px solid', borderColor: 'divider' }}>
                      {item.material}
                    </TableCell>
                    <TableCell align="center" sx={{ border: '1px solid', borderColor: 'divider' }}>
                      {item.description}
                    </TableCell>
                    <TableCell align="center" sx={{ border: '1px solid', borderColor: 'divider' }}>
                      {item.weight}
                    </TableCell>
                    <TableCell align="center" sx={{ border: '1px solid', borderColor: 'divider' }}>
                      <Button variant="contained" startIcon={<DeleteIcon />} color="error" sx={{ mr: 2 }} onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                      <Button variant="contained" startIcon={<UpdateIcon />} color="primary" onClick={() => handleUpdate(item.id)}>
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={jewellery.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default JewelleryList;
