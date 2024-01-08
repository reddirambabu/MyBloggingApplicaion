

# Simple Blogging Application

This project is a basic blogging platform developed using ReactJS for the frontend and Node.js (Express) for the backend. It allows users to create, view, edit, and delete blog posts.

## Features

- Display all blog posts on the homepage with titles and snippets.
- Clicking on a blog post opens the full article in the Post Detail Page.
- Create/Edit Post forms using controlled components for form handling.
- Simple navigation bar to switch between the homepage and post creation.

## Technologies Used

- ReactJS
- Node.js
- Express
- [UI Framework - if used]

## Installation

### Frontend

1. Navigate to the `frontend` directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Run the frontend server: `npm start`.

### Backend

1. Navigate to the `backend` directory: `cd backend`.
2. Install dependencies: `npm install`.
3. Run the backend server: `npm start`.

## Folder Structure

blog-application/
│
├── frontend/
│ ├── public/
│ ├── src/
| | ├── assets/
│ │ ├── components/
| | ├── pages/
│ │ ├── App.js
│ │ └── ...
│ └── package.json
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ └── package.json
│
├── README.md
└── .gitignore


## API Endpoints

- `GET /api/posts` - Get all blog posts.
- `GET /api/posts/:id` - Get a specific post by ID.
- `POST /api/posts` - Create a new post.
- `PUT /api/posts/:id` - Update a post by ID.
- `DELETE /api/posts/:id` - Delete a post by ID.