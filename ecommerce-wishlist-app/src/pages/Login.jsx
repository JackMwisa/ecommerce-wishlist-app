import { useState } from 'react';
import { Container, Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!username.trim() || !password.trim()) {
            setError('Please enter both username and password');
            return;
        }

        const success = login(username, password);
        if (!success) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <Container maxWidth="xs" sx={{ my: 4 }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h1" align="center" gutterBottom>
                        Login
                    </Typography>
                    {error && (
                        <Typography color="error" align="center" sx={{ mb: 2 }}>
                            {error}
                        </Typography>
                    )}
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
                </CardContent>
            </Card>
        </Container>
    );
}