import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/api';

function TaskList() {
  const [tasks, setTasks] = useState([]); // Store the list of tasks

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks(); // API call to fetch tasks
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error); // Log errors for debugging
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks(); // Refresh tasks
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong>: {task.description}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
