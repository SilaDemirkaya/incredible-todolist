// AboutScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';  // Import MainLayout

function AboutScreen() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>ToDo App</Text>
        <Text style={styles.subtitle}>By Your Name</Text>
        <Text style={styles.date}>Current Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  date: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default AboutScreen;
