# E-Commerce Backend REST API

A RESTful E-Commerce Backend API built with **Node.js** and **Express.js**.

## Features

- User & Product CRUD APIs
- Express Router
- API Key Authentication
- Protected Routes
- Request Validation
- Centralized Error Handling
- Proper HTTP Status Codes

## Tech Stack

- Node.js
- Express.js
- JavaScript (ES Modules)
- Postman

## API Endpoints

### Users
- GET `/api/users`
- GET `/api/users/:id`
- POST `/api/users`
- PUT `/api/users/:id`
- DELETE `/api/users/:id`

### Products
- GET `/api/products`
- GET `/api/products/:id`
- POST `/api/products`
- PUT `/api/products/:id`
- DELETE `/api/products/:id`

## Authentication

Protected APIs require:

`?apiKey=abc123`

## Run Locally

```bash
npm install
npm start
