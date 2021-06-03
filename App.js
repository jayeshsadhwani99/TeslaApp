import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <CarItem 
        name='Model X'
        tagline='Starting from $69,420'
        image={require('./assets/images/ModelX.jpeg')}        
      />

      <CarItem 
        name='Model 3'
        tagline='Order Online for'
        taglineCTA='Touchless Delivery'
        image={require('./assets/images/Model3.jpeg')}        
      /> */}

      <CarsList />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
