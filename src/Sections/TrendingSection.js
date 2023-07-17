import React, { forwardRef, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard';
import { jewelleryService } from '../Services/Api';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const TrendingSection = forwardRef((props, ref) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchJewelleryData();
  }, []);

  const fetchJewelleryData = () => {
    jewelleryService
      .getAllJewellery()
      .then((response) => {
        const jewelleryData = response;
        const randomProducts = getRandomProducts(jewelleryData, 5);
        setProducts(randomProducts);
      })
      .catch((error) => {
        console.error('Error fetching jewellery data:', error);
      });
  };

  const getRandomProducts = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const responsive = {
    0: { items: 1 },
    768: { items: 7 },
    
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" alignContent="center" sx={{ bgcolor: "#000" }} ref={ref}>
      <Typography variant="h4" color="#FFD700" mb={4} mt={10} sx={{ textAlign: 'center', px: '2px' }}>
        "Discover the Hottest Trends of the Past Week"
      </Typography>
      <Typography variant="body1" color="#FFD700" mb={4}>
        Best-Selling Items.
      </Typography>
      
      <Box
        sx={{
          mt: 2,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignContent:'center',
          alignItems: 'center',
          ml:{md:10,xs:5}
        }}
      >
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          disableSlideInfo={true}
          responsive={responsive}
          items={products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              material={product.material}
              description={product.description}
              weight={product.weight}
            />
          ))}
        />
      </Box>
      
    </Box>
  );
});

export default TrendingSection;
