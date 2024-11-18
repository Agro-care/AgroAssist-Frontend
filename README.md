# Agro Assist Front - End

This is a **React-based web application** that provides agricultural tools and e-commerce functionalities, including crop recommendations, fertilizer advice, disease identification, equipment rentals, and product management. The app supports **role-based access** for Admin, Farmer, and User roles.

---

## Features

- **User Authentication**: Login and signup functionality.
- **E-commerce Features**:
  - Add/remove products to/from cart and wishlist.
  - View product details.
- **Farmer Tools**:
  - Crop recommendations.
  - Fertilizer advice.
  - Disease identification.
  - Equipment rentals.
- **Weather Alerts**: Displays weather notifications.
- **Admin Dashboard**:
  - Manage products.
  - Review user activities.
  - Update product prices and inventory.
- **Role-Based Access Control**:
  - Only authenticated users can access certain pages.
  - Unauthorized users are redirected to the login page.

---

## Tech Stack

- **Front End:** Frame Work
- **styling:** Tailwind.css , css.
 
---
# Key Functionalities

## 1. UserContext Integration
- **Global State Management**: The `UserContext` manages the authenticated user's state across the application.
- **Dynamic UI Updates**: Ensures the UI adapts dynamically based on the user's role (e.g., Admin, Farmer, or General User).

---

## 2. Dynamic Routing
- **React Router Integration**: Implements navigation between different pages of the application.
- **Role-Based Access Control**: Routes are conditionally rendered based on the user's authentication status and role.

---

## 3. Cart and Wishlist Management
- **Add/Remove Products**: Users can add or remove products to/from their cart and wishlist.
- **Dynamic Data Fetching**: Cart and wishlist data are fetched in real-time from the backend.
- **Smooth User Experience**: Provides seamless interaction for e-commerce functionality.

---

## 4. Admin Dashboard
- **Product Management**: Admins can add, update, and remove products in the store.
- **User Monitoring**: Admins can view and manage user activities and interactions.
- **Additional Functionalities**:
  - Weather alerts for users.
  - Crop recommendation system.
  - Fertilizer recommendation engine.
  - Disease prediction system for plants.
  - Fully functional e-commerce store for users.

---






