# Task Management API

This is a RESTful API built with Node.js for managing tasks. The API includes authentication with JSON Web Tokens (JWT) and supports basic CRUD operations for tasks.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 14.x or above).
- **MongoDB**: A running MongoDB instance is required. You can use a local MongoDB server or a cloud-based MongoDB service like MongoDB Atlas.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <https://github.com/Aniruddhabandal/Assignment/tree/master>
cd <Assignment>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
PORT=5000
DATABASE_CONNECTION=mongodb://127.0.0.1:27017/Login
PORT=5000
```

### 4. Start the Server
To start the server in development mode:
```bash
npm run dev
```
For production:
```bash
npm start
```

The server will run on the port specified in the `.env` file (default: `5000`).

---

## API Endpoints

### Authentication

#### **POST /auth/register**
Register a new user.
- **Request Body:**
  ```json
  {
      "username": "exampleuser",
      "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
      "message": "User registered successfully"
  }
  ```

#### **POST /auth/login**
Log in and obtain a JWT token.
- **Request Body:**
  ```json
  {
      "username": "exampleuser",
      "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
      "token": "<jwt_token>"
  }
  ```

### Tasks

#### **GET /tasks**
Fetch all tasks for the authenticated user.
- **Headers:**
  ```json
  {
      "Authorization": "Bearer <jwt_token>"
  }
  ```
- **Response:**
  ```json
  [
      {
          "_id": "64a6f1d9c2f1d9c7a6f1d9c7",
          "title": "Task 1",
          "description": "Description for Task 1",
          "completed": false,
          "userId": "64a6f1d9c2f1d9c7a6f1d9c0"
      }
  ]
  ```

#### **GET /tasks/:id**
Fetch a single task by its ID.
- **Headers:** Same as above.
- **Response:**
  ```json
  {
      "_id": "64a6f1d9c2f1d9c7a6f1d9c7",
      "title": "Task 1",
      "description": "Description for Task 1",
      "completed": false,
      "userId": "64a6f1d9c2f1d9c7a6f1d9c0"
  }
  ```

#### **POST /tasks**
Create a new task.
- **Headers:** Same as above.
- **Request Body:**
  ```json
  {
      "title": "New Task",
      "description": "Description for the new task"
  }
  ```
- **Response:**
  ```json
  {
      "_id": "64a6f1d9c2f1d9c7a6f1d9c7",
      "title": "New Task",
      "description": "Description for the new task",
      "completed": false,
      "userId": "64a6f1d9c2f1d9c7a6f1d9c0"
  }
  ```

#### **PUT /tasks/:id**
Update an existing task by its ID.
- **Headers:** Same as above.
- **Request Body:**
  ```json
  {
      "title": "Updated Task",
      "description": "Updated description",
      "completed": true
  }
  ```
- **Response:**
  ```json
  {
      "_id": "64a6f1d9c2f1d9c7a6f1d9c7",
      "title": "Updated Task",
      "description": "Updated description",
      "completed": true,
      "userId": "64a6f1d9c2f1d9c7a6f1d9c0"
  }
  ```

#### **DELETE /tasks/:id**
Delete a task by its ID.
- **Headers:** Same as above.
- **Response:**
  ```json
  {
      "message": "Task deleted successfully"
  }
  ```

---

## Interactive API Documentation





---

## License
This project is licensed under the MIT License.

