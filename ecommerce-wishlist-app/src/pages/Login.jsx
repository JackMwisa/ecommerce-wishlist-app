import { useState } from 'react';
import { Container, Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (username && password) {
      login();
    }
  };

  return (
    <Container maxWidth="xs" sx={{ my: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Demo credentials: any username/password will work
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}