import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  CircularProgress
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { useSnackbar } from 'notistack';

export default function ProductCard({ product, onWishlist = false, onRemove }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleAddToWishlist = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));  
      dispatch(addToWishlist(product));
      enqueueSnackbar(` "${product.title}" added to wishlist`, {
        variant: 'success',
        autoHideDuration: 2500,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    } catch (err) {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 1 }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          ${product.price}
        </Typography>
      </CardContent>

      <CardActions>
        {onWishlist ? (
          <Button
            size="small"
            color="error"
            variant="outlined"
            onClick={onRemove}
          >
            Remove
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleAddToWishlist}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? 'Adding...' : 'Add to Wishlist'}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
