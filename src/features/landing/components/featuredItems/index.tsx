import { Card, CardContent, CardMedia, Typography, Grid, CircularProgress, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useGetFeaturedItems } from '@app/features/landing/hooks/useGetFeaturedItems';

const FeaturedItems: React.FC = () => {
  const {
    featuredItems,
    featuredItemsLoading,
    featuredItemsError,
    fetchFeaturedItems
  } = useGetFeaturedItems();

  useEffect(() => {
    fetchFeaturedItems({ limit: 6 });
  }, [fetchFeaturedItems]);

  if (featuredItemsLoading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (featuredItemsError) {
    return (
      <Box p={2}>
        <Typography color="error">
          Error loading featured items: {featuredItemsError.error}
        </Typography>
      </Box>
    );
  }

  if (!featuredItems.length) {
    return (
      <Box p={2}>
        <Typography color="text.secondary">
          No featured items available at the moment.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={1} justifyContent="flex-start">
      {featuredItems.map((item) => (
        <Grid size="auto" key={item._id}>
          <Card sx={{ height: 220, width: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' ,marginBottom: 2}}>
            <CardMedia
              image={item.coverImage?.url || ''}
              title={item.basicInfo.title}
              sx={{ height: 100 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: 16 }}>
                {item.basicInfo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13, mb: 1 }}>
                {item.basicInfo.description}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: 12 }}>
                {item.location.city}, {item.location.area}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedItems;