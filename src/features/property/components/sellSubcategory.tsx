
import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Avatar, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom';
const subcategories = [
  {
    title: 'Cars',
    desc: 'Sedan, Hatchback, SUV, Luxury Cars',
    icon: <DirectionsCarIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Motorcycles',
    desc: 'Sport Bikes, Cruisers, Touring Bikes',
    icon: <TwoWheelerIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Scooters',
    desc: 'Electric & Petrol Scooters',
    icon: <ElectricMopedIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Commercial Vehicles',
    desc: 'Trucks, Buses, Tempo, Auto Rickshaw',
    icon: <LocalShippingIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Bicycles',
    desc: 'Mountain, Road, Hybrid, Electric Bikes',
    icon: <DirectionsBikeIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Spare Parts',
    desc: 'Car Parts, Bike Parts, Accessories',
    icon: <SettingsIcon fontSize="large" color="primary" />,
  },
];

const SellSubCategory: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Avatar sx={{ bgcolor: "#e3f2fd", color: "#1976d2", mr: 2 }}>
          <span role="img" aria-label="clipboard">
            📋
          </span>
        </Avatar>
        <Typography variant="h5" fontWeight={700}>
          Subcategory Name
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {subcategories.map((cat, idx) => (
          <Grid key={cat.title}>
            <Link to="/subcategory-form">
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 480,
                  minHeight: 110,
                  boxShadow: idx === 0 ? 4 : 1,
                  border: idx === 0 ? "2px solid #1976d2" : "none",
                  borderRadius: 3,
                  transition: "box-shadow 0.2s",
                  cursor: "pointer",
                  "&:hover": { boxShadow: 6 },
                  mx: "auto",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#f5f5f5",
                    color: "#1976d2",
                    width: 56,
                    height: 56,
                    ml: 3,
                    mr: 3,
                    fontSize: 32,
                    boxShadow: 1,
                  }}
                >
                  {cat.icon}
                </Avatar>
                <CardContent sx={{ flex: 1, px: 0 }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {cat.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {cat.desc}
                  </Typography>
                </CardContent>
                <IconButton sx={{ mr: 2 }}>
                  <ChevronRightIcon fontSize="large" />
                </IconButton>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SellSubCategory;