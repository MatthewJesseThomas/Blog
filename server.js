const express = require('express');
const route = require('./controller');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errorHandling } = require('./middleware/ErrorHandling');

const port = process.env.PORT || 4000;
const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use(route);

// Error handling middleware
app.use(errorHandling);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
