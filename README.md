# 🚨 Incident Tracker - Backend API

This is the backend service for the **Incident Tracker Application**.
Built using **Node.js, Express.js, and MongoDB**, it provides REST APIs to manage incidents.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Validator
- CORS
- Dotenv
- Nodemon

---


##  Getting Started

Follow the steps below to run the backend locally.

---

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Create Environment File

Create a `.env` file in the root directory:

```
PORT=5700
MONGO_URI=your_mongodb_connection_string
```

Example:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/incidentDB
```

---

### 3️⃣ Run Development Server

```bash
npm run dev
```

This uses **nodemon** for auto-restart.

---

### 4️⃣ Run Production Server

```bash
npm start
```

---

## 🌐 Server URL

Default server will run at:

```
http://localhost:5700
```



Incident Management Backend
