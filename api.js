import axios from 'axios';

const API_URL = 'http://localhost:8000/tasks'; // Base URL of the API.

// Return all tasks
export const getTasks = () => axios.get(API_URL);

// Return a single task by ID
export const getTask = (id) => axios.get(`${API_URL}/${id}`);

// Create a new task
export const createTask = (task) => axios.post(API_URL, task);

// Update an existing task
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);

// Delete a task
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);