import { Card, CardContent, CardMedia, Typography, Grid, CircularProgress, Alert } from '@mui/material';
import React, { useEffect } from 'react';
import { useGetAllCategories } from '@app/features/landing/hooks/useGetAllCategories';
import type { Category } from '@app/features/landing/types';

const Categories: React.FC = () => {
  const { categories, isLoading, error, fetchCategories } = useGetAllCategories();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories({
        isPaginate: false,
        status: "active",
      });
    }
  }, [categories.length, fetchCategories]);

  if (isLoading) {
    return (
      <Grid container justifyContent="center" sx={{ py: 4 }}>
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid container justifyContent="center" sx={{ py: 4 }}>
        <Alert severity="error">
          Failed to load categories: {error.error}
        </Alert>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} justifyContent="flex-start">
      {categories.map((category: Category) => (
        <Grid size="auto" key={category._id}>
          <Card sx={{ height: 170, width: 170, cursor: 'pointer' }}>
            <CardMedia
              image={category.icon || "/static/images/cards/contemplative-reptile.jpg"}
              title={category.name}
              sx={{ height: 85 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" noWrap>
                {category.name}
              </Typography>
              {category.description && (
                <Typography variant="body2" color="text.secondary" noWrap>
                  {category.description}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;