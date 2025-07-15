import { Container, Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to MyStore
        </Typography>
        <Typography variant="body1">
          Browse our amazing collection of products and save your favorites to your wishlist.
        </Typography>
      </Box>
    </Container>
  );
}