# ProShop.API

ProShop.API is a Node.js/Express backend for an e-commerce platform. It provides RESTful APIs for products, users, orders, authentication, and file uploads, with MongoDB as the database.

## Features

- User registration, authentication (JWT), and profile management
- Admin features for user and product management
- Product catalog with reviews and ratings
- Order creation, payment (PayPal integration), and delivery tracking
- Secure file/image uploads
- API documentation with Swagger UI
- Logging with Winston and Morgan
- Error handling and validation

## Project Structure

```
.
├── src/
│   ├── app.js                # Express app setup
│   ├── index.js              # Entry point
│   ├── swagger.json          # Swagger API docs
│   ├── controllers/          # Route controllers
│   ├── db/                   # Database connection
│   ├── middleware/           # Express middlewares
│   ├── models/               # Mongoose models
│   ├── routes/               # Express routes
│   └── utils/                # Utility functions
├── uploads/                  # Uploaded files
├── .env                      # Environment variables
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)
- PayPal developer account (for payment integration)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/CleverCottonmouth/ProShop.API.git
   cd ProShop.API
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following variables:

   ```
   PORT=8000
   MONGODB_URI=mongodb://localhost:27017/proshop
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=15m
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRY=7d
   JWT_SECRET=your_jwt_secret
   PAGINATION_LIMIT=10
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_APP_SECRET=your_paypal_app_secret
   PAYPAL_API_URL=https://api-m.sandbox.paypal.com
   ```

4. **Run the server:**
   ```sh
   npm start
   ```

   The server will start on `http://localhost:8000`.

## API Documentation

Swagger UI is available at [http://localhost:8000/api-docs](http://localhost:8000/api-docs).

## Key Endpoints

### Health Check

- `GET /`  
  Returns API health status.

### Products

- `GET /api/products`  
  List all products (supports pagination and search).
- `GET /api/products/:id`  
  Get product details.
- `POST /api/products`  
  Create product (admin).
- `PUT /api/products/:id`  
  Update product (admin).
- `DELETE /api/products/:id`  
  Delete product (admin).
- `POST /api/products/:id/reviews`  
  Add a review (authenticated).

### Users

- `POST /api/users`  
  Register new user.
- `POST /api/users/auth`  
  Authenticate user (login).
- `POST /api/users/logout`  
  Logout user.
- `GET /api/users/profile`  
  Get user profile (authenticated).
- `PUT /api/users/profile`  
  Update profile (authenticated).
- `GET /api/users`  
  List users (admin).
- `DELETE /api/users/:id`  
  Delete user (admin).

### Orders

- `POST /api/orders`  
  Create order (authenticated).
- `GET /api/orders/mine`  
  Get user's orders (authenticated).
- `GET /api/orders/:id`  
  Get order by ID (authenticated).
- `PUT /api/orders/:id/pay`  
  Mark order as paid (authenticated, PayPal).
- `PUT /api/orders/:id/deliver`  
  Mark order as delivered (admin).
- `GET /api/orders`  
  List all orders (admin).

### Uploads

- `POST /api/upload`  
  Upload an image file.

### PayPal

- `GET /api/config/paypal`  
  Get PayPal client ID for frontend integration.

## Logging

- HTTP requests are logged using Morgan and Winston.
- Application logs are written to `app.log`.

## Error Handling

- Centralized error handling middleware returns consistent error responses.
- Invalid ObjectId errors are handled by [`checkObjectId`](src/middleware/checkObjectId.js).

## Development

- Nodemon is used for auto-reloading during development.
- Customize VSCode settings in `.vscode/`.

## License

This project is licensed under the MIT License.

---

**Author:** miraj  
[GitHub Repository](https://github.com/CleverCottonmouth/ProShop.API)