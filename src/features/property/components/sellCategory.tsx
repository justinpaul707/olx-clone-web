
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import WorkIcon from '@mui/icons-material/Work';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Link } from 'react-router-dom';

const categories = [
  {
    label: 'Vehicles',
    desc: 'Cars, Bikes, Commercial Vehicles, Spare Parts',
    icon: <DirectionsCarIcon fontSize="large" color="primary" />,
  },
  {
    label: 'Properties',
    desc: 'Houses, Apartments, Shops, Land, PGs',
    icon: <HomeIcon fontSize="large" color="success" />,
  },
  {
    label: 'Electronics',
    desc: 'Mobiles, Laptops, TVs, Cameras, Gaming',
    icon: <PhoneIphoneIcon fontSize="large" color="error" />,
  },
  {
    label: 'Fashion',
    desc: 'Clothing, Shoes, Watches, Jewelry, Bags',
    icon: <CheckroomIcon fontSize="large" sx={{ color: '#ffb300' }} />,
  },
  {
    label: 'Home & Lifestyle',
    desc: 'Furniture, Appliances, Home Decor, Garden',
    icon: <HomeIcon fontSize="large" sx={{ color: '#ab47bc' }} />,
    highlighted: true,
  },
  {
    label: 'Services',
    desc: 'Education, Health, Travel, Professional Services',
    icon: <MiscellaneousServicesIcon fontSize="large" color="success" />,
  },
  {
    label: 'Jobs',
    desc: 'Full-time, Part-time, Freelance, Internships',
    icon: <WorkIcon fontSize="large" sx={{ color: '#29b6f6' }} />,
  },
];


const SellCategory: React.FC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', mt: 4 }}>
      <Grid container spacing={6} justifyContent="center">
        {categories.map((cat) => (
          <Grid size={3} key={cat.label}>
            <Link to="/sell-subcategory" style={{ textDecoration: 'none' }}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  minHeight: 210,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'none',
                  borderColor: '#e3eaf0',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: 4 },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  {cat.icon}
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#222', fontSize: 22 }}>
                    {cat.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16 }}>
                    {cat.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SellCategory;