

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const stats = [
  { label: "Total Ads", value: 12 },
  { label: "Active", value: 8 },
  { label: "Sold", value: 3 },
  { label: "Expired", value: 1 },
  { label: "Total Views", value: "1,247" },
  { label: "This Week", value: 89 },
];


const AdsCount = () => {
  return (
    <Box width="100%">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem 2.5rem',
          justifyContent: 'flex-start',
        }}
      >
        {stats.slice(0, 6).map((stat) => (
          <Paper
            key={stat.label}
            elevation={0}
            sx={{
              minWidth: 220,
              minHeight: 120,
              background: 'linear-gradient(135deg, #f8fafc 60%, #e2e8f0 100%)',
              borderRadius: 3,
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2.5,
              border: '2px solid #e2e8f0',
            }}
          >
            <Typography
              sx={{
                color: '#2563eb',
                fontWeight: 700,
                fontSize: 40,
                mb: 1,
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              sx={{
                color: '#444',
                fontWeight: 500,
                fontSize: 22,
              }}
            >
              {stat.label}
            </Typography>
          </Paper>
        ))}
      </Box>
      <Divider sx={{ borderTopWidth: 4, borderColor: '#e2e8f0', mt: 5 }} />
    </Box>
  );
};

export default AdsCount;
