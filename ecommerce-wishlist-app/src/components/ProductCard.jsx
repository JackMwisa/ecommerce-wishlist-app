import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import { useWishlist } from '../hooks/useWishlist';

export default function ProductCard({ product, onWishlist = false }) {
  const { addToWishlist, removeFromWishlist } = useWishlist();

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
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
            onClick={() => removeFromWishlist(product.id)}
          >
            Remove
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() => addToWishlist(product)}
          >
            Add to Wishlist
          </Button>
        )}
      </CardActions>
    </Card>
  );
}