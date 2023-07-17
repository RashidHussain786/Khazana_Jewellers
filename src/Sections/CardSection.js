import React from 'react';
import { Box } from '@mui/material';
import Card from '../Components/Card';

const CardSection = () => {
  const cards = [
    {
      id: 1,
      image: './Assets/Gem.png',
      name: 'Gems and Natural Stones',
      description: 'We use precious and semi-precious stones: diamonds, emeralds, sapphires, etc. and also work with Swarovski crystals.',
    },
    {
      id: 2,
      image: './Assets/Golds.png',
      name: '585 Gold',
      description: 'Our fine jewelry will never darken or wear off. With proper care, you can wear it for 50+ years and pass it to your heirs!',
    },
    {
      id: 3,
      image: './Assets/Design.png',
      name: 'Designer Collections',
      description: 'We create exquisite fine jewelry. Each collection has a soul and a certain message that resonates in the hearts of our customers.',
    },
  ];

  return (
    <Box sx={{backgroundColor:"#000000",pt:10, display:"flex",alignContent:'center',alignItems:'center', justifyContent:"center",flexDirection:{md:'row',xs:'column'}}}>
      {cards.map((card, index) => (
        <React.Fragment key={card.id}>
          <Card
            image={card.image}
            name={card.name}
            description={card.description}
          />
          {index !== cards.length - 1 && <Box width={100} />} 
        </React.Fragment>
      ))}
    </Box>
  );
};

export default CardSection;
