import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function frontScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Button title='hello Filip' onPress={() => {
        navigation.navigate("Blue background"); 
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

* Upload the project to github and provide link below */