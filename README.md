# Task Management Web Application

## Overview
This is a simple web application that allows users to manage a list of tasks. The application includes a backend API, a database, and a frontend interface to perform CRUD operations on tasks.

---

## Features
- **View tasks**: Display a list of all tasks.
- **Add tasks**: Create new tasks with a title and description.
- **Edit tasks**: Update existing tasks, including marking them as completed.
- **Delete tasks**: Remove tasks from the list.
- **Error handling**: Proper error messages and HTTP status codes for all endpoints.

---

## Technologies Used
- **Backend**: Python, [Flask/Django/FastAPI] (choose your framework).
- **Database**: SQL (PostgreSQL/MySQL).
- **Frontend**: [React/Angular/Vue.js] (choose your framework).

---

## API Endpoints
1. `GET /tasks`  
   Retrieves a list of all tasks.

2. `GET /tasks/{id}`  
   Retrieves details of a specific task by its ID.

3. `POST /tasks`  
   Creates a new task.  
   **Request Body Example**:  
   ```json
   {
     "title": "Sample Task",
     "description": "Task details",
     "completed": false
   }
