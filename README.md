# Agro Assist - Front End

## Overview
This project is a React-based web application designed to provide agricultural and e-commerce functionalities, including crop recommendations, fertilizer advice, disease identification, equipment rentals, and product management. The application integrates user authentication and role-specific features for Admin, Farmer, and User roles. It also includes cart and wishlist functionalities and dynamically fetches data from a backend API.

## Features
User Authentication: Supports login and signup.
E-commerce Functionality:
Add products to cart and wishlist.
Remove items from the cart.
View product details.
Farmer Tools:
Crop recommendations.
Fertilizer advice.
Disease identification.
Rental equipment listing.
Weather Alerts: Displays weather-related notifications.
Admin Dashboard:
Manage products.
Review user activities.
Update product prices and inventory.
Role-Based Access Control:
Certain pages require authentication.
Unauthorized users are redirected to the login page.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Express.js, Node.js
- **Database**: MongoDB Atlas
- **Styling**: CSS
- **Deployment**: PM2 (process management, AWS EC2)

## API Overview
The backend provides a set of RESTful API endpoints to support interactions for:
- **Products**: Retrieve, add, update, and delete product listings.
- **Cart**: Manage items in the cart, including adding, updating quantities, and removing items.
- **Wishlist**: Manage items in the wishlist and move items between the wishlist and cart.

## Steps to Run 
## Locally
- Frontend (React)
- cd appname
- npm install
- npm start
- Access the application at: http://localhost:5000/

- Backend (Express.js)
- cd server
- npm install
- node app.js
- Access the API at: http://localhost:5000
##

## Deployment Instructions
- docker-compose build
- docker-compose up -d

## Accessing the Application
- Frontend Web Address: http://34.226.191.216:5000
- API Endpoint: http://34.226.191.216:5000/api
- Deployed EC2 IP Address: 34.226.191.216

## MongoDB Initialization
- MongoDB initialization scripts are stored in the mongo-init directory.
- The docker-compose.yml automatically initializes MongoDB with predefined collections.


## Project Goals
This project aims to provide a comprehensive shopping experience by combining a responsive frontend with a robust backend. The integration of MongoDB Atlas allows for reliable data persistence, while the API-driven structure facilitates smooth communication between the frontend and backend.

## GitHub Repository
- https://github.com/ICSI518/assignment2-premsaipotukuchi

## Acknowledgments
- This project incorporates inspiration from the e-commerce community and contributions from team members and resources.
- Generative AI was used where noted for certain code components.

