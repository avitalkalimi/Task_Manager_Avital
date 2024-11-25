import React, { useState } from 'react';
import { createTask } from '../services/api';

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState(''); // State for the task title
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask({ title, description, completed: false });
      setTitle('');
      setDescription('');
      onTaskAdded(); // Refresh the task list
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
