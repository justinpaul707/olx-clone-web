import { Card, Typography, Grid, Box, Button, Stack, Avatar, Checkbox, Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import type { AdsInfo } from '@app/types/ads';

type FeaturedItemsProps = {
    ads: AdsInfo[];
};
  
  const FeaturedItems: React.FC<FeaturedItemsProps> = ({ ads }) => {

 
    return (
         <Box sx={{ p: { xs: 1, md: 3 } }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h5" fontWeight={700}>
                    Your Listings
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: 2, textTransform: 'none' }}>Select All</Button>
            </Box>
            <Stack spacing={3}>
                {ads.map((ad) => (
                    <Card key={ad.id} sx={{ borderRadius: 3, boxShadow: 2, p: 2, position: 'relative' }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid >
                                <Checkbox color="primary" />
                            </Grid>
                            <Grid>
                                <Avatar sx={{ width: 72, height: 72, fontSize: 40, bgcolor: '#f5f5f5' }}>{ad.image}</Avatar>
                            </Grid>
                            <Grid>
                                <Typography variant="h6" fontWeight={700} mb={1}>{ad.title}</Typography>
                                <Typography variant="h5" fontWeight={700} color="success.main" mb={1}>{ad.price}</Typography>
                                <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <LocationOnIcon fontSize="small" color="error" />
                                        <Typography variant="body2">{ad.location}</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <CalendarMonthIcon fontSize="small" color="action" />
                                        <Typography variant="body2">Posted {ad.posted}</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <AccessTimeIcon fontSize="small" color="action" />
                                        <Typography variant="body2">Expires in {ad.expires}</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={3} alignItems="center" mb={2}>
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <VisibilityIcon fontSize="small" />
                                        <Typography variant="body2">{ad.views} views</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <ChatBubbleOutlineIcon fontSize="small" />
                                        <Typography variant="body2">{ad.chats} chats</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <FavoriteIcon fontSize="small" color="error" />
                                        <Typography variant="body2">{ad.favorites} favorites</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <Button variant="contained" color="primary" startIcon={<EditIcon />} sx={{ textTransform: 'none' }}>Edit</Button>
                                    <Button variant="outlined" color="warning" startIcon={<RocketLaunchIcon />} sx={{ textTransform: 'none' }}>Promote</Button>
                                    <Button variant="contained" color="success" startIcon={<CheckBoxIcon />} sx={{ textTransform: 'none' }}>Mark as Sold</Button>
                                    <Button variant="outlined" color="info" startIcon={<ShareIcon />} sx={{ textTransform: 'none' }}>Share</Button>
                                    <Button variant="contained" color="error" startIcon={<DeleteIcon />} sx={{ textTransform: 'none' }}>Delete</Button>
                                </Stack>
                            </Grid>
                            <Grid  sx={{ position: 'absolute', top: 18, right: 24 }}>
                                <Stack direction="row" spacing={1}>
                                    {ad.status.map((status) => (
                                        <Chip
                                            key={status}
                                            label={status}
                                            color={status === 'ACTIVE' ? 'success' : 'secondary'}
                                            size="small"
                                            sx={{ fontWeight: 700, bgcolor: status === 'FEATURED' ? '#e1bee7' : undefined, color: status === 'FEATURED' ? '#7c43bd' : undefined }}
                                        />
                                    ))}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Card>
                ))}
            </Stack>
        </Box>
    )
  }
  
 export default FeaturedItems;