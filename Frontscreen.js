import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function frontScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Button title='hello Filip' onPress={() => {
        navigation.navigate("blueBackground"); 
      }}/> 
      
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


/* Task
* Make a static FlatList in StartView with three rows "Orange Juice", "Banana Smoothie", "Cider"
* Make a view for a row. Blue background with white text.
* Clicking on a line opens a new view with navigation that shows the text larger

* Upload the project to github and provide link below */