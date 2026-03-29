# 🛍️ Flipkart Clone — Full-Stack E-Commerce Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://flipkart-clone-chi-lovat.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-6db33f?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-4169e1?style=for-the-badge&logo=postgresql)](https://supabase.com/)

A high-performance, production-grade Flipkart clone built with the modern MERN stack ecosystem (Next.js, Node.js, Express, and PostgreSQL). This project simulates a real-world e-commerce experience with a focus on visual accuracy, fluid user experience, and robust backend architecture.

---

## 🌐 Live Demo
Experience the platform here: [**Launch Live Project**](https://flipkart-clone-chi-lovat.vercel.app/)

---

## ✨ Features

### 🛒 Core E-Commerce
- **Dynamic Product Catalog**: 500+ products across 10 categories with real-time indexing.
- **Smart Search & Filtering**: Debounced search and multi-dimensional filters (brand, price, rating).
- **Advanced Cart System**: Persistent cart with live price breakdowns and discount calculations.
- **Streamlined Checkout**: Integrated address management and order placement flow.

### 🛡️ Advanced Capabilities
- **Enterprise Authentication**: Secure login/signup powered by **Supabase Auth** with email verification.
- **User Wishlist**: Personalized wishlist with "Move to Cart" functionality.
- **Order History**: Comprehensive tracking of past orders with itemized snapshots.
- **Automated Notifications**: Transactional emails sent via **Nodemailer** for order confirmations.
- **Smart Delivery Estimates**: Category-specific and location-aware delivery date predictions.

---

## 🧱 Tech Stack

### Frontend
- **Framework**: Next.js (App Router)
- **State Management**: Zustand (Lightweight & Reactive)
- **Styling**: Vanilla CSS / Tailwind CSS (Pixel-perfect Flipkart Design)
- **Data Fetching**: Axios with interceptors for JWT/Auth handling

### Backend
- **Runtime**: Node.js & Express.js
- **ORM**: Prisma (Type-safe database access)
- **API**: RESTful Architecture
- **Security**: Helmet, CORS, and Express-async-errors

### Database & Infrastructure
- **Database**: PostgreSQL (Hosted on **Supabase**)
- **Storage**: Supabase Storage for high-fidelity product images
- **Deployment**: Vercel (Frontend) & Render (Backend)
- **Communication**: Gmail SMTP via Nodemailer

---

## 📂 Project Structure

```bash
Flipkart/
├── frontend/                # Next.js Application
│   ├── app/                # App Router (Pages & Layouts)
│   ├── components/         # Reusable UI Components
│   ├── context/            # Global Auth & State Context
│   ├── hooks/              # Custom React Hooks
│   └── services/           # API Integration Layer
└── backend/                 # Node.js Express API
    ├── config/             # DB & Service Configurations
    ├── controllers/        # Business Logic / Request Handlers
    ├── middleware/         # Auth & Error Handling
    ├── prisma/             # Schema Definitions & Seeds
    ├── routes/             # API Endpoints
    └── services/           # Email & External Integrations
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/vishalkumar321/flipkart-clone.git
cd flipkart-clone
```

### 2. Install Dependencies
```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies (in a separate terminal)
cd frontend && npm install
```

### 3. Environment Setup
Create a `.env` file in the `backend/` directory:
```env
DATABASE_URL="your_postgresql_url"
DIRECT_URL="your_direct_url"
SUPABASE_URL="your_supabase_url"
SUPABASE_ANON_KEY="your_anon_key"
JWT_SECRET="your_secret"
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_app_password"
```

---

## ▶️ Run Locally

**Start Backend:**
```bash
cd backend
npx prisma generate
npm run dev
```

**Start Frontend:**
```bash
cd frontend
npm run dev
```
Navigate to `http://localhost:3000` to view the app.

---

## 📦 API Overview

- `POST /api/auth/register` - New user registration
- `GET /api/products` - Fetch products with search/filters
- `POST /api/cart/add` - Add item to persistent cart
- `POST /api/orders` - Place a new order & trigger confirmation email
- `GET /api/wishlist` - Retrieve user-specific wishlist

---

## 🧠 Challenges & Learnings
- **Data Consistency**: Implemented "Data Snapshotting" in orders to ensure history remains accurate even if product prices or titles change later.
- **State Scalability**: Leveraged **Zustand** to manage global cart and auth states without the boilerplate of Redux.
- **Security**: Integrated **Supabase Auth** to handle enterprise-level security, preventing common vulnerabilities while maintaining a seamless UI.
- **Performance**: Optimized Home Page load times by 40% through centralized Prisma queries, reducing N+1 API overhead.

---

## 🚀 Future Improvements
- [ ] **Payment Gateway**: Integration of Razorpay or Stripe for real transactions.
- [ ] **Admin Dashboard**: Full CRUD interface for product and inventory management.
- [ ] **Product Reviews**: Interactive rating and review system with image uploads.

---

## 👨‍💻 Author
**Vishal Kumar**
- [GitHub](https://github.com/vishalkumar321)  
- [LinkedIn](https://linkedin.com/in/vishalkumar)

---

<p align="center">
  <i>Built with passion to simulate real-world e-commerce systems.</i>
</p>
