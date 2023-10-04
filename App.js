import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import frontScreen from './Frontscreen';
import blueScreen from './Bluescreen';
import largerText from './LargerText';

export default function App() {
  
  const stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Front screen' component={frontScreen}/>
        <stack.Screen name='Blue background' component={blueScreen}/>
        <stack.Screen name='Larger text' component={largerText}/>
      </stack.Navigator>
    </NavigationContainer>

  );
};

/* Task
* Make a static FlatList in StartView with three rows "Orange Juice", "Banana Smoothie", "Cider"

* Upload the project to github and provide link below */