# 📝 Blog App (MERN Stack)

A full-stack Blog Application built using the MERN stack (MongoDB, Express, React, Node.js).
Users can register, log in, and manage their own posts with a clean UI and dark mode support.

---

## 🚀 Features

* 🔐 User Authentication (Register & Login)
* ✍️ Create, Edit, Delete Posts
* 🔒 Protected Routes (Only logged-in users can manage posts)
* 🌙 Dark Mode with persistence
* 📱 Responsive & clean UI
* ⚡ Fast frontend using Vite

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* CSS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB Atlas

**Other**

* JWT Authentication
* bcrypt (password hashing)

---

## 📂 Project Structure

blog-app/
├── client/ # React frontend
├── server/ # Node.js backend
├── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/Tiyasha20/blog-app
cd blog-app

---

### 2️⃣ Setup Backend

cd server
npm install

Create a `.env` file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm run dev

---

### 3️⃣ Setup Frontend

cd client
npm install
npm run dev

---

## 🌐 API Endpoints

### Auth

* POST `/api/auth/register` → Register user
* POST `/api/auth/login` → Login user

### Posts

* GET `/api/posts` → Get all posts
* POST `/api/posts` → Create post (Protected)
* PUT `/api/posts/:id` → Update post (Protected)
* DELETE `/api/posts/:id` → Delete post (Protected)

---

## 🔐 Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Environment variables for sensitive data
* `.env` excluded from GitHub

---

## 🌙 Dark Mode

* Toggle between light & dark theme
* Preference saved using localStorage

---

## 📸 Screenshots

(Add your screenshots here)

---

## 🌍 Deployment

(To be added – deploy on Render & Vercel)

---

## 👩‍💻 Author

**Tiyasha Bhattacharjee**

---

## ⭐ Future Improvements

* Like & comment system
* Image upload in posts
* User profiles
* Search & filter posts

---

## 💡 Note

This project was built as part of learning full-stack development and demonstrates core concepts of MERN stack applications.

---

⭐ If you like this project, give it a star!
