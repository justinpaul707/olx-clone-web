import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  useTheme,
} from '@mui/material';
import SignupForm from '@app/features/auth/components/signup/SignupForm';
import { Link } from 'react-router-dom';
import '@app/styles/auth.css';

const SignupPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4285f4 0%, #1976d2 50%, #0d47a1 100%)',
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
          minHeight: { xs: 'auto', md: '700px' },
        }}>
              <Box sx={{
                flex: { xs: 'none', md: '1 1 50%' },
                background: 'linear-gradient(135deg, #4285f4 0%, #1976d2 100%)',
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
                  {/* Add Registration Illustration */}
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
                        content: '"🎯"',
                        fontSize: { xs: '60px', md: '80px' },
                        position: 'absolute',
                        left: '30%',
                        top: '30%',
                      },
                      '&::after': {
                        content: '"👥"',
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
                        background: '#4CAF50',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px'
                      }}>
                        ⭐
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
                    Join OLX Clone!
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
                    Create your account and start buying & selling today
                  </Typography>
                  
                  <Box sx={{ textAlign: 'left', maxWidth: '350px' }}>
                    {[
                      { icon: '🎯', text: 'Post unlimited ads for free' },
                      { icon: '💬', text: 'Chat directly with buyers' },
                      { icon: '🔒', text: 'Secure payment options' },
                      { icon: '⭐', text: 'Join millions of users' }
                    ].map((feature, index) => (
                      <Typography 
                        key={index}
                        variant="body1" 
                        sx={{ 
                          mb: 2, 
                          opacity: 0.9, 
                          display: 'flex', 
                          alignItems: 'center',
                          color: 'white',
                        }}
                      >
                        <Box 
                          component="span" 
                          sx={{ 
                            mr: 2, 
                            fontSize: '1.2rem',
                          }}
                        >
                          {feature.icon}
                        </Box>
                        {feature.text}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>

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
                  minHeight: { xs: 'auto', md: '600px' }
                }}>
                <Box sx={{ 
                  mb: 4,
                  p: { xs: 2, md: 3 },
                  textAlign: 'center',
                }}>
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
                    Create Account
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ 
                      fontFamily: 'Poppins, Arial, sans-serif',
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      textAlign: 'center',
                      color: '#666666',
                    }}
                  >
                    Fill in your details to get started
                  </Typography>
                </Box>

                <Box sx={{ maxWidth: { xs: '100%', sm: 400 }, mx: 'auto' }}>
                  <SignupForm />
                </Box>

                <Divider sx={{ my: 4 }}>
                  <Typography variant="body2" color="text.secondary">
                    OR
                  </Typography>
                </Divider>

                {/* Quick Links */}
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
                    Already have an account?
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 3, 
                    justifyContent: 'center', 
                    flexWrap: 'wrap',
                    alignItems: 'center'
                  }}>
                    <Link 
                      to="/login" 
                      style={{ 
                        color: theme.palette.primary.main, 
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontFamily: 'Poppins, Arial, sans-serif',
                        fontSize: '1rem'
                      }}
                    >
                      Sign In
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
                      Need Help?
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
                    By creating an account, you agree to our{' '}
                    <Link 
                      to="/terms" 
                      style={{ 
                        color: theme.palette.primary.main,
                        textDecoration: 'none'
                      }}
                    >
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link 
                      to="/privacy" 
                      style={{ 
                        color: theme.palette.primary.main,
                        textDecoration: 'none'
                      }}
                    >
                      Privacy Policy
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

export default SignupPage;