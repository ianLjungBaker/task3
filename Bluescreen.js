import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function blueScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={{color:"white"}} onPress={() => {
        navigation.navigate("Larger text"); 
      }}>MAKE ME LARGER</Text>
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
* Upload the project to github and provide link below */