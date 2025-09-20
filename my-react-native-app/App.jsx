import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 bg-slate-200 justify-center items-center">
      <Text className="flex-wrap font-bold text-xl">Open up App.js to start working on your app !</Text>
      <StatusBar style="auto" />
    </View>
  );
};
