import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function frontScreen({navigation, route}) {

  return (
    <View style={styles.container}>
      <Button title='PRESS ME TO GO TO A BLUE BACKGROUND' onPress={() => {
        navigation.navigate("Blue background"); 
      }}/> 

      <FlatList
        data={[
          {drinks: "Orange Juice"},
          {drinks: "Banana Smoothie"},
          {drinks: "Cider"}
        ]}
        renderItem={({item}) => <Text>{item.drinks}</Text>}
      />
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
* Upload the project to github and provide link below */