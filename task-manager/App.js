import React, { useState } from 'react';
// import the code we write
import TaskList from './components/TaskList'; 
import TaskForm from './components/TaskForm';

function App() {
  const [refresh, setRefresh] = useState(false); // Allwayes check for new missions

  const handleTaskAdded = () => {
    setRefresh(!refresh); // If there new mission, start update
  };

  return (
    <div>
      <TaskForm onTaskAdded={handleTaskAdded} /> 
      <TaskList key={refresh} />
    </div>
  );
}

export default App;
