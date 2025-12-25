import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
  useTheme,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ArrowBack as ArrowBackIcon,
  ShoppingCart as ShoppingCartIcon,
  Category as CategoryIcon,
} from '@mui/icons-material';

const NotFoundPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 50%, #D54826 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      p: { xs: 2, md: 3 },
    }}>
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <Card sx={{
          width: '100%',
          borderRadius: 4,
          overflow: 'hidden',
          background: '#ffffff',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: { xs: 'auto', md: '600px' },
        }}>
          {/* Left Side - Illustration */}
          <Box sx={{
            flex: { xs: 'none', md: '1 1 50%' },
            background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
            color: 'white',
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              {/* 404 Illustration */}
              <Box sx={{ 
                mb: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Box sx={{
                  width: { xs: '200px', md: '250px' },
                  height: { xs: '150px', md: '180px' },
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '"🔍"',
                    fontSize: { xs: '60px', md: '80px' },
                    position: 'absolute',
                    left: '30%',
                    top: '30%',
                  },
                  '&::after': {
                    content: '"📦"',
                    fontSize: { xs: '40px', md: '50px' },
                    position: 'absolute',
                    right: '20%',
                    bottom: '20%',
                  }
                }}>
                  <Box sx={{
                    position: 'absolute',
                    left: '10%',
                    top: '20%',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: '#FFD700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px'
                  }}>
                    ❌
                  </Box>
                </Box>
              </Box>

              <Typography 
                variant="h3" 
                component="h1" 
                fontWeight="bold" 
                gutterBottom
                sx={{
                  fontFamily: 'Poppins, Montserrat, Arial, sans-serif',
                  letterSpacing: 0.5,
                  fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                  mb: 2,
                  color: 'white',
                }}
              >
                Oops! Page Lost
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  opacity: 0.9,
                  fontFamily: 'Poppins, Arial, sans-serif',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  mb: 4,
                  maxWidth: '400px',
                  color: 'white',
                }}
              >
                The page you're looking for seems to have wandered off
              </Typography>
              
          
            </Box>
          </Box>

          {/* Right Side - 404 Content */}
          <Box sx={{ 
            flex: { xs: 'none', md: '1 1 50%' },
            display: 'flex',
            flexDirection: 'column',
            background: '#ffffff',
          }}>
            <CardContent sx={{ 
              p: { xs: 4, sm: 5, md: 6, lg: 8 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              minHeight: { xs: 'auto', md: '500px' }
            }}>
              <Box sx={{ 
                mb: 4,
                p: { xs: 2, md: 3 },
                textAlign: 'center',
              }}>
                {/* Large 404 */}
                <Typography 
                  variant="h1"
                  sx={{
                    fontSize: { xs: '4rem', sm: '5rem', md: '6rem' },
                    fontWeight: 'bold',
                    color: '#FF6B35',
                    mb: 2,
                    fontFamily: 'Poppins, Montserrat, Arial, sans-serif',
                  }}
                >
                  404
                </Typography>
                
                <Typography 
                  variant="h4" 
                  component="h2" 
                  gutterBottom 
                  fontWeight="600"
                  sx={{
                    fontFamily: 'Poppins, Montserrat, Arial, sans-serif',
                    color: '#333333',
                    letterSpacing: 0.2,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    textAlign: 'center',
                  }}
                >
                  Page Not Found
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ 
                    fontFamily: 'Poppins, Arial, sans-serif',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    textAlign: 'center',
                    color: '#666666',
                    mb: 4,
                  }}
                >
                  The page you're looking for doesn't exist or has been moved
                </Typography>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ maxWidth: { xs: '100%', sm: 400 }, mx: 'auto', width: '100%' }}>
                <Stack spacing={3}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<HomeIcon />}
                    onClick={() => navigate('/')}
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      bgcolor: '#FF6B35',
                      fontFamily: 'Poppins, Arial, sans-serif',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': {
                        bgcolor: '#E55A2B',
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Go to Homepage
                  </Button>
                </Stack>
              </Box>

              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  gutterBottom
                  sx={{ 
                    fontFamily: 'Poppins, Arial, sans-serif',
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}
                >
                  Looking for something specific?
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 3, 
                  justifyContent: 'center', 
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                  <Link 
                    to="/categories" 
                    style={{ 
                      color: theme.palette.primary.main, 
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontFamily: 'Poppins, Arial, sans-serif',
                      fontSize: '1rem'
                    }}
                  >
                    View Categories
                  </Link>
                  <Typography variant="body1" color="text.secondary">•</Typography>
                  <Link 
                    to="/help" 
                    style={{ 
                      color: theme.palette.text.secondary, 
                      textDecoration: 'none',
                      fontFamily: 'Poppins, Arial, sans-serif',
                      fontSize: '1rem'
                    }}
                  >
                    Get Help
                  </Link>
                </Box>
              </Box>
              
              {/* Footer */}
              <Box sx={{ 
                background: '#f8f9fa', 
                p: { xs: 2, sm: 3 }, 
                textAlign: 'center',
                borderTop: `1px solid #e9ecef`,
                mt: 'auto',
              }}>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    fontFamily: 'Poppins, Arial, sans-serif',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                  }}
                >
                  Still can't find what you're looking for?{' '}
                  <Link 
                    to="/contact" 
                    style={{ 
                      color: theme.palette.primary.main,
                      textDecoration: 'none'
                    }}
                  >
                    Contact Support
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default NotFoundPage;