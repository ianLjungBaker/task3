import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function largerText({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text>Make me larger!</Text>
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
Make new project
* Add navigation to the project
* Make a static FlatList in StartView with three rows "Orange Juice", "Banana Smoothie", "Cider"
* Make a view for a row. Blue background with white text.
* Clicking on a line opens a new view with navigation that shows the text larger

* Upload the project to github and provide link below */