import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the list
  const addTask = (newTask) => {
    if (newTask.trim() && !tasks.includes(newTask)) { // Prevent empty or duplicate tasks
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} /> {/* Pass addTask as a prop */}
      <ToDoList tasks={tasks} /> {/* Pass tasks to ToDoList */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
});

export default App;
