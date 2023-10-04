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
        <stack.Screen name='blueBackground' component={blueScreen}/>
        <stack.Screen name='largerText' component={largerText}/>
      </stack.Navigator>
    </NavigationContainer>

  );

};



/* Task
Make new project
* Add navigation to the project
* Make a static FlatList in StartView with three rows "Orange Juice", "Banana Smoothie", "Cider"
* Make a view for a row. Blue background with white text.
* Clicking on a line opens a new view with navigation that shows the text larger

* Upload the project to github and provide link below */