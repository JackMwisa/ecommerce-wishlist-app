# E-Commerce Wishlist App 🛍️

<div align="center">
  <img src="/ecommerce-wishlist-app/src/assets/readme.png" alt="App Screenshot" width="850"/>
</div>

## ✨ Key Features
| Feature | Description |
|---------|-------------|
| 🏠 Home Page | Welcome screen with app introduction |
| ℹ️ About Page | Project information and developer details |
| 🛒 Product Catalog | Fetches from [FakeStoreAPI](https://fakestoreapi.com) |
| ❤️ Wishlist | Save favorites with localStorage persistence |
| 🔒 Auth System | Protected routes with simulated login |
| 🎨 UI Framework | Material UI components and styling |
| 🧭 Navigation | React Router v6 for seamless routing |

## ⚙️ Installation & Setup
```bash
# 1. Clone repository
git clone https://github.com/your-username/ecommerce-wishlist-app.git

# 2. Navigate to project directory
cd ecommerce-wishlist-app

# 3. Install dependencies
npm install

# 4. Start development server
npm start

# 5. Open in browser (default)
http://localhost:3000



## 📂 Project Structure

src/
├── components/          # Reusable components
│   ├── Navbar.jsx       # Main navigation bar
│   ├── ProductCard.jsx  # Product display component
│   └── ProtectedRoute.jsx # Auth wrapper
├── hooks/              # Custom hooks
│   ├── useAuth.js       # Authentication logic
│   └── useWishlist.js   # Wishlist management
├── pages/              # Route components
│   ├── Home.jsx         # Landing page
│   ├── About.jsx        # Info page
│   ├── Products.jsx     # Product listing
│   ├── Wishlist.jsx     # Saved items
│   ├── Login.jsx        # Auth form
│   └── NotFound.jsx     # 404 page
├── App.js              # Root component
└── index.js            # Entry point