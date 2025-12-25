import Categories from '@app/features/landing/components/categories';
import FeaturedItems from '@app/features/landing/components/featuredItems';
import SearchBar from '@app/features/landing/components/searchBar/index';
import { Container, Typography } from '@mui/material';
import React from 'react';

const Landing: React.FC = () => {

    return (
      <>
        <Container>
          <SearchBar />
          <Typography
            variant="h5"
            component="h5"
            sx={{ textAlign: "left", marginTop: "20px", marginBottom: "20px" }}
          >
            Browse categories
          </Typography>
          <Categories />
          <Typography
            variant="h5"
            component="h5"
            sx={{ textAlign: "left", marginTop: "20px", marginBottom: "20px" }}
          >
            Fresh recommendations
          </Typography>
          <FeaturedItems />
        </Container>
      </>
    );

};

export default Landing;