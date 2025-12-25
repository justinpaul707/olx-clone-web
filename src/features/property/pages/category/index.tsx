
import React from 'react';
import SellCategory from '@app/features/property/components/sellCategory';
import { Container } from '@mui/material';

const SellCategoryIndex: React.FC = () => {
  return (
    <>
    <Container sx={{flex:1}}>
       <SellCategory/>
    </Container>
    </>
  );
};

export default SellCategoryIndex;