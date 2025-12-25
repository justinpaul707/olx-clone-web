

import React from 'react';
import { Box, Typography, Button, Avatar, Stack, Chip, Paper, useTheme, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EditIcon from '@mui/icons-material/Edit';


const Profile: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          minHeight: "100vh",
          py: { xs: 2, md: 8 },
          px: { xs: 1, md: 0 },
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={4} sx={{ maxWidth: 1200, width: "100%" }}>
          <Grid size={12}>
            <Paper
              elevation={6}
              sx={{
                borderRadius: 6,
                p: 4,
                textAlign: "center",
                background: "#fff",
                position: { md: "sticky" },
                top: 40,
                boxShadow: "0 8px 32px 0 rgba(106,90,249,0.08)",
              }}
            >
              <Avatar
                sx={{
                  width: 110,
                  height: 110,
                  mx: "auto",
                  mb: 2,
                  boxShadow: 4,
                  border: `4px solid ${theme.palette.primary.light}`,
                }}
              />
              <Typography
                variant="h4"
                fontWeight={900}
                gutterBottom
                sx={{
                  letterSpacing: 0.5,
                  fontFamily: "Poppins, Montserrat, Arial, sans-serif",
                  color: "#23235b",
                  mb: 0.5,
                }}
                noWrap
              >
                Justin Paul
              </Typography>
              <Chip
                icon={<VerifiedUserIcon />}
                label="Verified Member"
                color="success"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  px: 2.5,
                  fontSize: 16,
                  height: 36,
                  letterSpacing: 0.2,
                  fontFamily: "Poppins, Montserrat, Arial, sans-serif",
                  background:
                    "linear-gradient(90deg, #e0ffe0 0%, #b2f7b2 100%)",
                  color: "#1b5e20",
                }}
              />
              <Stack
                direction="row"
                justifyContent="center"
                spacing={5}
                sx={{ mb: 3 }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={900}
                    sx={{
                      color: "#2563eb",
                      fontFamily: "Montserrat, Poppins, Arial, sans-serif",
                      fontSize: 28,
                    }}
                  >
                    24
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                  >
                    Ads Posted
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={900}
                    sx={{
                      color: "#2563eb",
                      fontFamily: "Montserrat, Poppins, Arial, sans-serif",
                      fontSize: 28,
                    }}
                  >
                    156
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                  >
                    Followers
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={900}
                    sx={{
                      color: "#2563eb",
                      fontFamily: "Montserrat, Poppins, Arial, sans-serif",
                      fontSize: 28,
                    }}
                  >
                    89
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                  >
                    Following
                  </Typography>
                </Box>
              </Stack>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                sx={{
                  background:
                    "linear-gradient(90deg, #2563eb 0%, #705df2 100%)",
                  color: "#fff",
                  borderRadius: 10,
                  px: 5,
                  py: 1.7,
                  fontWeight: 900,
                  fontFamily: "Montserrat, Poppins, Arial, sans-serif",
                  boxShadow: 4,
                  mt: 2,
                  textTransform: "none",
                  fontSize: 18,
                  letterSpacing: 0.2,
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #705df2 0%, #2563eb 100%)",
                  },
                }}
              >
                Edit Profile
              </Button>
            </Paper>
          </Grid>

          <Grid container spacing={4}>
            <Grid size={4}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 5,
                  p: 3.5,
                  background: "#fff",
                  height: "80%",
                  boxShadow: "0 4px 24px 0 rgba(106,90,249,0.06)",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={900}
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    letterSpacing: 0.2,
                  }}
                >
                  <Box
                    component="span"
                    sx={{ color: "#2563eb", mr: 1, fontSize: 28 }}
                  >
                    <i className="material-icons">groups</i>
                  </Box>
                  Social & Network
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      py: 1.7,
                      borderRadius: 2.5,
                      transition: "background 0.2s",
                      "&:hover": { background: "#f5f6fa" },
                    }}
                  >
                    <i
                      className="material-icons"
                      style={{
                        color: "#2563eb",
                        marginRight: 16,
                        fontSize: 26,
                      }}
                    >
                      person add
                    </i>
                    <Box>
                      <Typography fontWeight={800}>My Network</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Manage followers, following and find friends
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      py: 1.7,
                      borderRadius: 2.5,
                      transition: "background 0.2s",
                      "&:hover": { background: "#f5f6fa" },
                    }}
                  >
                    <i
                      className="material-icons"
                      style={{
                        color: "#2563eb",
                        marginRight: 16,
                        fontSize: 26,
                      }}
                    >
                      favorite border
                    </i>
                    <Box>
                      <Typography fontWeight={800}>Wishlist</Typography>
                      <Typography variant="body2" color="text.secondary">
                        View and manage your liked items
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid size={4}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 5,
                  p: 3.5,
                  background: "#fff",
                  height: "80%",
                  boxShadow: "0 4px 24px 0 rgba(106,90,249,0.06)",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={900}
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    letterSpacing: 0.2,
                  }}
                >
                  <Box
                    component="span"
                    sx={{ color: "#2563eb", mr: 1, fontSize: 28 }}
                  >
                    <i className="material-icons">credit card</i>
                  </Box>
                  Orders & Billing
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      py: 1.7,
                      borderRadius: 2.5,
                      transition: "background 0.2s",
                      "&:hover": { background: "#f5f6fa" },
                    }}
                  >
                    <i
                      className="material-icons"
                      style={{
                        color: "#2563eb",
                        marginRight: 16,
                        fontSize: 26,
                      }}
                    >
                      shopping bag
                    </i>
                    <Box>
                      <Typography fontWeight={800}>
                        Buy Packages & My Orders
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Manage packages, orders, invoices & billing
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      py: 1.7,
                      borderRadius: 2.5,
                      transition: "background 0.2s",
                      "&:hover": { background: "#f5f6fa" },
                    }}
                  >
                    <i
                      className="material-icons"
                      style={{
                        color: "#2563eb",
                        marginRight: 16,
                        fontSize: 26,
                      }}
                    >
                      receipt long
                    </i>
                    <Box>
                      <Typography fontWeight={800}>
                        Transaction History
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        View all your payment transactions
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid size={4}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 5,
                  p: 3.5,
                  background: "#fff",
                  boxShadow: "0 4px 24px 0 rgba(106,90,249,0.06)",
                  height: "80%",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={900}
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    letterSpacing: 0.2,
                  }}
                >
                  <Box
                    component="span"
                    sx={{ color: "#2563eb", mr: 1, fontSize: 28 }}
                  >
                    <i className="material-icons">settings</i>
                  </Box>
                  Settings & Support
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      py: 1.7,
                      borderRadius: 2.5,
                      transition: "background 0.2s",
                      "&:hover": { background: "#f5f6fa" },
                    }}
                  >
                    <i
                      className="material-icons"
                      style={{
                        color: "#2563eb",
                        marginRight: 16,
                        fontSize: 26,
                      }}
                    >
                      manage accounts
                    </i>
                    <Box>
                      <Typography fontWeight={800}>Account Settings</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Privacy, security and account preferences
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      py: 1.7,
                      borderRadius: 2.5,
                      transition: "background 0.2s",
                      "&:hover": { background: "#f5f6fa" },
                    }}
                  >
                    <i
                      className="material-icons"
                      style={{
                        color: "#2563eb",
                        marginRight: 16,
                        fontSize: 26,
                      }}
                    >
                      language
                    </i>
                    <Box>
                      <Typography fontWeight={800}>
                        Language Settings
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Currently set to English
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;