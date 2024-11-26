// src/components/ToDoList.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View style={styles.list}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
  },
  task: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default ToDoList;
