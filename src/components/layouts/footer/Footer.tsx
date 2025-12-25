import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {

  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 4, position: 'relative', left: 0, bottom: 0, width: '100%', zIndex: 1300, minHeight: '50px', height: '50%' }}>
        <Container maxWidth="md">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">
              © {new Date().getFullYear()} OLX clone. All rights reserved.
            </Typography>
            <Typography variant="body2">
              Powered by OLX Clone
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
