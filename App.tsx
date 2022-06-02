import React from "react";
import { AuthProvider } from "./Context/Auth.native";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Page} from './Page';

export default function App() {

 // const {getNumber} = useAuth();

  
  return (
    <AuthProvider>
    <View style={styles.container}>
      
      <Text>Open up App.tsx to start working on your app!</Text>
      <Page></Page>
      <StatusBar style="auto" />
    </View>
    </AuthProvider>
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
