import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you're looking for doesn't exist.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}