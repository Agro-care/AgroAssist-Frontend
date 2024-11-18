# Agro Assist - Front End

## Overview
This project is a React-based web application designed to provide agricultural and e-commerce functionalities, including crop recommendations, fertilizer advice, disease identification, equipment rentals, and product management. The application integrates user authentication and role-specific features for Admin, Farmer, and User roles. It also includes cart and wishlist functionalities and dynamically fetches data from a backend API.

## Features
- **Product Listing and Details**: Users can view all available products and get detailed information on each item.
- **Cart Functionality**: Users can add items to the cart, adjust quantities, and remove items as needed.
- **Wishlist Functionality**: Users can add items to their wishlist and easily move items between the wishlist and cart.
- **Data Persistence**: All cart and wishlist items are saved in MongoDB Atlas, ensuring data is available across sessions.

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

