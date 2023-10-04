import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function largerText({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={{color:"white", fontSize: 80}} 
      >MAKE ME LARGER</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A7C7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/* Task
* Make a static FlatList in StartView with three rows "Orange Juice", "Banana Smoothie", "Cider"
* Clicking on a line opens a new view with navigation that shows the text larger

* Upload the project to github and provide link below */