import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { jewelleryService } from '../Services/Api';


const CollectionSection = ({ numItems ,isHomePage}) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = numItems;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const fetchJewelleryData = async () => {
      try {
        setIsLoading(true); // Set loading state to true
        const response = await jewelleryService.getAllJewellery();
        const jewelleryData = response;
        setProducts(jewelleryData);
        setIsLoading(false); // Set loading state to false once data is fetched
      } catch (error) {
        console.error('Error fetching jewellery data:', error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchJewelleryData();
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ bgcolor: '#000' }}>
      <Typography variant="h4" color="#FFD700" sx={{mt:{md:20,xs:4},mb:3}}>
        Product Collection
      </Typography>
      <Typography variant="body1" color="#FFD700" sx={{mb:{md:4},textAlign:'center',mx:{md:0,xs:2}}}>
        In this section, you will find fine jewelry chosen by hundreds of our customers around the US. Best price guaranteed.
      </Typography>
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
        <Box display="flex" flexWrap="wrap" justifyContent="center" mt={4} mx={-2}>
          {currentProducts.map((product) => (
            <Box key={product.id} px={2} mb={4}>
              <ProductCard
                image={product.image}
                name={product.name}
                material={product.material}
                description={product.description}
                weight={product.weight}
              />
            </Box>
          ))}
        </Box>
        {isHomePage && (
        <Box display="flex" justifyContent="center" mt={2}>
          <IconButton sx={{ mx: 1, color: '#FFD700' }} onClick={handlePrevPage}>
            <ChevronLeft />
          </IconButton>
          <IconButton sx={{ mx: 1, color: '#FFD700' }} onClick={handleNextPage}>
            <ChevronRight />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default CollectionSection;
