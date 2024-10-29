import React, { useState } from 'react';
import { View } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Function to add a new task to the list
  const addTask = (newTask) => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <View>
      <ToDoForm addTask={addTask} /> {/* Pass addTask as a prop to ToDoForm */}
      <ToDoList tasks={tasks} />      {/* Pass tasks as a prop to ToDoList */}
    </View>
  );
};

export default App;
