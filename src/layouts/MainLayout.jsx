// layouts/MainLayout.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../../src/components/Footer'; // Ensure the path is correct

function MainLayout({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
