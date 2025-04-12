# 🛒 Price Watcher

**Price Watcher** is a full-stack web application designed to help farmers, traders, and agricultural stakeholders track crop prices, get location-based market intelligence, and make better decisions using real-time data.

🌐 [Live Site](https://price-watcher.onrender.com)

---

## 🧠 Project Overview

### 🎯 Problem Statement

In rural areas, farmers often face uncertainty in crop selection and a lack of awareness of current market prices or trustworthy buyers. This can lead to losses, crop wastage, and poor planning.

### ✅ Solution

**Price Watcher** bridges this gap by:
- Recommending crops based on soil, climate, and region
- Displaying verified buyers by state and pincode
- Integrating a marketplace with real-time price insights
- Offering an intuitive UI and secured backend with payment and image handling

---

## ⚙️ How It Works

### 🗂 Backend Logic (Node + Express + MongoDB)
- APIs expose endpoints for:
  - Recommending crops based on query filters
  - Fetching buyers and prices from the database
  - Handling secure login & registration
  - Uploading images to Cloudinary
  - Creating Razorpay payment orders
- Uses JWT for secure session handling

### 🎨 Frontend Logic (React + Vite)
- Users can:
  - Select crop preferences
  - View buyer contacts and market prices
  - Register/login to manage interactions
  - Upload crop images for better reach
  - Complete payments via Razorpay
- Clean, responsive UI using Tailwind CSS


## 📈 Use Cases

- 👨‍🌾 **Farmers** – Get crop suggestions, know your buyer, sell smarter
- 🧑‍💼 **Traders** – Discover reliable sellers and contact them directly
- 🏢 **Organizations** – Analyze patterns, set fair prices, and support agricultural planning

---

## 🧱 Architecture Diagram (Conceptual)




---

## 🌟 Core Features

| Feature                      | Description |
|-----------------------------|-------------|
| 🌾 Crop Recommendation       | Based on soil, month, climate, and state |
| 📍 Buyer Locator             | Shows verified buyers by location         |
| 📊 Dashboard                 | Analyze price trends (planned)            |

---

## 📚 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas with Mongoose



