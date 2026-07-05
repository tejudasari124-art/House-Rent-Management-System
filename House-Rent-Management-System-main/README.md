# 🏠 House Rent Management System

A full-stack **House Rent Management System** developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This application allows users to register, log in securely, browse rental properties, add new properties, search and filter listings, book properties, and manage their bookings.

---

## 📌 Features

* User Registration
* User Login using JWT Authentication
* Add New Property
* View All Properties
* Property Details Page
* Book a Property
* View My Bookings
* Dashboard
* Search Properties by Location
* Filter by Property Type
* Filter by Maximum Price
* Responsive User Interface

---

## 🛠 Technologies Used

### Frontend

* React.js
* React Router DOM
* Bootstrap 5
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

---

## 📂 Project Structure

```
House-Rent-Management-System/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

---

## ⚙ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd server
npm install
npm start
```

### Frontend

```bash
cd client
npm install
npm start
```

---

## 🔐 Authentication

The application uses **JWT (JSON Web Token)** for secure authentication. After a successful login, a JWT token is generated and stored in Local Storage. Protected routes verify this token before allowing access.

---

## 📷 Screenshots

### 🏠 Home Page
![Home Page](screenshots/home.png)

### 🔑 Login Page
![Login Page](screenshots/login.png)

### 📝 Register Page
![Register Page](screenshots/register.png)

### 🏘️ Properties Page
![Properties Page](screenshots/properties.png)

### 📄 Property Details Page
![Property Details](screenshots/property-details.png)

### ➕ Add Property Page
![Add Property](screenshots/add-property.png)

### 📊 Dashboard
![Dashboard](screenshots/dashboard.png)

### 📅 My Bookings
![My Bookings](screenshots/my-bookings.png)

## 🚀 Future Enhancements

* Online Payment Gateway
* Property Approval by Admin
* Google Maps Integration
* Property Reviews & Ratings
* Email Notifications
* Cloudinary Image Upload

---

## 👨‍💻 Developed By

**CHINTAKULA MUKESH NARAYANA**

Full Stack Development with MERN Internship Project.
