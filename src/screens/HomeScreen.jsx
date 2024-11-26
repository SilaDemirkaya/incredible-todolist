// HomeScreen.jsx
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ToDoList from '../../src/components/ToDoList';
import ToDoForm from '../../src/components/ToDoForm';
import MainLayout from '../../src/layouts/MainLayout';  // Import MainLayout

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <MainLayout>  {/* Wrap screen content with MainLayout */}
      <View style={styles.container}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default HomeScreen;
