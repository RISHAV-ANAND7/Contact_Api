# Contact API

A RESTful API built using Node.js, Express, and MongoDB that allows users to register, log in, and manage their contacts. Authentication is handled using JWT, and password security is ensured with bcrypt.

## Features

- User Registration
- User Login
- JWT Authentication Middleware
- Create, Read, Update, and Delete (CRUD) operations for contacts
- Secure password storage with bcrypt

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **JWT (JSON Web Token)** for authentication
- **bcrypt** for password hashing

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   MONGO_URL=<your-mongodb-connection-string>
   JWT=<your-secret-key>
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The API will be running at `http://localhost:3000`.

## API Endpoints

### User Authentication

#### Register a new user

```http
POST /api/auth/register
```

**Request Body:**

```json
{
  "username": "user123",
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### Login

```http
POST /api/user/login
```

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Contacts Management (Requires Authentication)

#### Get all contacts

```http
GET /api/contact/
Headers: Authorization: Bearer <token>
```

#### Get a specific contact by ID

```http
GET /api/contact/:id
Headers: Authorization: Bearer <token>
```

#### Create a new contact

```http
POST /api/contact/new
Headers: Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
  "type":"personal"
}
```

#### Update a contact

```http
PUT /api/contact/:id
Headers: Authorization: Bearer <token>
```

#### Delete a contact

```http
DELETE /api/contact/:id
Headers: Authorization: Bearer <token>
```

## Authentication & Middleware

The API uses JWT-based authentication. Users must log in to receive a token, which must be included in the `Authorization` header for contact-related requests.

## License

This project is licensed under the MIT License.


