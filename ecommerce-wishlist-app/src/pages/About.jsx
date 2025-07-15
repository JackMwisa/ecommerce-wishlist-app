import { Container, Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          This is a demo e-commerce application built with React, Material UI, and React Router.
        </Typography>
        <Typography variant="body1" paragraph>
          It demonstrates key features like routing, authentication, and wishlist functionality.
        </Typography>
      </Box>
    </Container>
  );
}