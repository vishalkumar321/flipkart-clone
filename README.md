# 🛍️ Flipkart Clone — Full-Stack E-Commerce Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://flipkart-clone-chi-lovat.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-6db33f?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-4169e1?style=for-the-badge&logo=postgresql)](https://supabase.com/)

A high-performance, production-grade Flipkart clone built with **Next.js 16**, **Express.js**, and **PostgreSQL (Supabase)**. This project demonstrates a comprehensive implementation of e-commerce architecture, including persistent state management, atomic transaction processing, and a highly resilient UI.

---

## 🌐 Live Demo
Experience the platform here: [**Launch Live Project**](https://flipkart-clone-chi-lovat.vercel.app/)

---

## ✨ Features

### 🛒 Core E-Commerce
- **Dynamic Product Catalog**: 500+ products across 10 categories with real-time indexing.
- **Smart Search & Filtering**: Debounced search and multi-dimensional filters (brand, price, rating).
- **Advanced Cart System**: Persistent cart with live price breakdowns and discount calculations.
- **Atomic Checkout**: Transaction-safe order processing with stock decrement guarantees.

### 🛡️ Advanced Capabilities
- **Enterprise Authentication**: Secure identity management powered by **Supabase Auth** with email verification.
- **Resilient UI**: Automated image fallback logic and skeleton loading for a seamless user experience.
- **Order History & Wishlist**: Personalized dashboards with data snapshotting for historical accuracy.
- **Email Notifications**: Transactional emails sent via **Nodemailer** for order confirmations.

---

## 🧱 Tech Stack

### Frontend
- **Framework**: Next.js (App Router / React 19)
- **State Management**: Zustand (Lightweight & High Performance)
- **Styling**: Vanilla CSS (Flipkart Accurate Design System)
- **Data Fetching**: Axios with interceptors for JWT/Auth handling

### Backend
- **Runtime**: Node.js & Express.js
- **ORM**: Prisma (Type-safe database architecture)
- **API**: RESTful Architecture with standardized error handling
- **Security**: Supabase Auth Integration, Input Validation, and Helmet security headers

### Database & Infrastructure
- **Database**: PostgreSQL (Hosted on **Supabase**)
- **Storage**: Supabase Storage for high-fidelity assets
- **Deployment**: Vercel (Frontend) & Render/Local (Backend)
- **Email**: Gmail SMTP via Nodemailer

---

## 📂 Project Structure

```bash
Flipkart/
├── frontend/                # Next.js Application
│   ├── app/                # App Router (Pages & Layouts)
│   ├── components/         # PascalCase UI Components
│   ├── context/            # Global Auth & State Context
│   ├── services/           # API Integration Layer
│   └── utils/              # Client-side Helpers & Constants
└── backend/                 # Node.js Express API
    ├── config/             # DB & Service Configurations
    ├── controllers/        # Business Logic / Request Handlers
    ├── middleware/         # Auth, Error & Validation Middleware
    ├── prisma/             # Schema Definitions & Seeds
    ├── routes/             # API Endpoints
    ├── services/           # External Integrations (Email)
    └── utils/              # Generic Helper Utilities
```

---

## ⚙️ Setup Instructions

### 1. Installation
```bash
git clone https://github.com/vishalkumar321/flipkart-clone.git
cd flipkart-clone && npm install
```

### 2. Environment Setup
Create a `.env` file in the `backend/` directory:
```env
DATABASE_URL="your_postgresql_url"
DIRECT_URL="your_direct_url"
JWT_SECRET="your_secret"
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_app_password"
```

### 3. Execution
```bash
# Start Backend
cd backend && npm run dev

# Start Frontend
cd frontend && npm run dev
```

---

## 🧠 Engineering Challenges & Learnings
- **Data Snapshotting**: Implemented a snapshot system in orders to preserve purchase-time prices and titles, ensuring historical accuracy independent of catalog updates.
- **UI Resiliency**: Developed a global `onError` handler system for images, ensuring that flaky third-party assets never break the visual professionality of the site.
- **Atomic Transactions**: Leveraged Prisma Transactions to prevent race conditions during checkout, guaranteeing stock integrity across concurrent orders.
- **Optimized Rendering**: Utilized Next.js App Router and strategic caching to minimize database load on high-traffic entry points like the Home Layout.

---

## 👨‍💻 Author
**Vishal Kumar**
- [GitHub](https://github.com/vishalkumar321)  
- [LinkedIn](https://linkedin.com/in/vishalkumar)

---

<p align="center">
  <i>Built with passion to simulate real-world e-commerce systems.</i>
</p>
