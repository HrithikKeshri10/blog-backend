# Blog Platform API

A RESTful API built with Node.js, Express, and MongoDB that powers a personal blog platform. Features include user authentication, post creation, and post retrieval.

## Features

- User Authentication (JWT with cookie-based sessions)
- Create and retrieve blog posts
- Filter posts by author
- Secure password hashing
- Input validation
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:

```
git clone <repository-url>
cd blog-platform
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/blog-platform
PORT=3200
JWT_SECRET=your-secret-key-here
```

4. Start MongoDB service on your machine

5. Start the application:

- For development:
  ```
  nodemon index.js
  ```

## API Endpoints

### Authentication

#### Register a new user

```
POST /api/auth/signup
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "password123"
}
```

#### Login

```
POST /api/auth/login
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "password123"
}
```

### Posts

#### Create a new post (requires authentication)

```
POST /api/post
Content-Type: application/json

{
    "title": "Post Title",
    "content": "Post content goes here"
}
```

#### Get all posts

```
GET /api/posts
```

#### Get posts by author

```
GET /api/posts?author=authorId
```

## Development Choices

1. **Authentication Strategy**

   - JWT with HTTP-only cookies for security
   - Secure password hashing with bcrypt

2. **Database**

   - MongoDB with Mongoose for flexible schema
   - Proper indexing for performance
   - Referential integrity between users and posts

3. **Security**

   - Input validation
   - CORS protection
   - Secure cookie options
   - Password hashing
   - Protected routes

4. **Code Organization**
   - MVC-like structure
   - Middleware for common operations
   - Separate route handlers
   - Centralized validation

## Available Commands

- `npm install`: Install dependencies
- `nodemon index.js`: Start development server with hot reload

## Error Handling

The API uses consistent error responses:

```javascript
{
    "error": "Error message here"
}
```
