import * as React from 'react';
import { StyleSheet, FlatList, TextInput, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Pokemon>();
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          style={{ height: 40, backgroundColor: '#EEE', borderRadius: 4, marginBottom: 20, padding: 10 }}
          placeholder="What are looking for?"
        />
      </View>
      <FlatList<Result>
        data={data?.results}
        keyExtractor={({ name }, index) => name}
        renderItem={({ item }) => (
          <View style={{flexDirection: "row", paddingVertical: 20}}>
            <MaterialCommunityIcons name="pokeball" size={24} color="red" style={{ flex: 0.1 }} />
            <Text style={styles.listItemText}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '20px',
    flex: 1,
    backgroundColor: '#fff'
  },
  listItemText: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 16,
    alignContent: 'center',
    justifyContent: 'center',
    flex: 0.9
  }
});
