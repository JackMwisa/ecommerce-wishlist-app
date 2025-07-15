import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../hooks/useWishlist';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Wishlist
      </Typography>
      {wishlist.length === 0 ? (
        <Typography variant="body1">Your wishlist is empty</Typography>
      ) : (
        <Grid container spacing={4}>
          {wishlist.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard 
                product={product} 
                onWishlist={true}
                onRemove={() => removeFromWishlist(product.id)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}