import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={{ height: '100%', paddingHorizontal: 8, paddingVertical: 16 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ flex: 1, height: 100, marginRight: 10, backgroundColor: 'powderblue', padding: 10, borderRadius: 4 }} >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>322</Text>
        </View>
        <View style={{ flex: 1, height: 100, marginRight: 10, backgroundColor: 'skyblue', padding: 10, borderRadius: 4 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>458</Text>
        </View>
        <View style={{ flex: 1, height: 100, backgroundColor: 'steelblue', padding: 10, borderRadius: 4 }} >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>125</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cardStat: {
    height: 50,
    flex: 1
  }
});
