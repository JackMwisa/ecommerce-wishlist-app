import { useState } from 'react';
import {
    Container,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Box,
    Alert
} from '@mui/material';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        // For demo purposes, accept any non-empty credentials
        if (username.trim() && password.trim()) {
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

                    <Alert severity="info" sx={{ mb: 3 }}>
                        Demo credentials: Use any username and password
                    </Alert>

                    <Box component="form" onSubmit={handleSubmit}>
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
                            disabled={!username.trim() || !password.trim()}
                        >
                            Login
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}