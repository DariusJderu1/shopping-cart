# Wearhaus Shopping Cart

A browser-based shopping cart application built with React. Users can browse clothing products, view product details, add items to a cart, update quantities, and remove items from the cart.

The products are fetched from the Fake Store API and filtered to use men's and women's clothing.

Live Demo: https://shopping-cart-darius.netlify.app/cart

## Technologies Used

- React: Component-based structure and state management for the shop and cart flow.
- CSS Modules: Scoped styling for pages, product cards, cart items, and reusable UI components.
- Vite: Development server and production build tool.
- React Router: Handles navigation between the home, shop, product details, cart, and error pages.
- Fake Store API: Provides the clothing product data and images.
- Material UI: Used for the cart badge and loading spinner.
- Lodash: Used for shuffling the product list.
- React Icons: Used for icons in the navbar, product details page, and cart.
- canvas-confetti: Used for the checkout button effect.

## Features

- Product Browsing: Users can view a list of clothing products from the shop page.
- Product Details: Each product has a details page with image, title, price, description, quantity selector, and add-to-cart button.
- Cart Count: The navbar shows the total number of items currently in the cart.
- Cart Management: Users can remove items from the cart and change item quantities.
- Order Summary: The cart page displays subtotal, shipping, and total price.
- Loading and Error States: The app displays loading and error UI while fetching product data.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```
