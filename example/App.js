import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useAccessibilityInfo from '@rnhooks/acessibility-info';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function App() {
  const isScreenReaderEnabled = useAccessibilityInfo();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/acessibility-info</Text>
      <Text style={styles.instructions}>The screen reader is</Text>
      <Text style={styles.instructions}>
        {isScreenReaderEnabled ? 'on' : 'off'}
      </Text>
    </View>
  );
}

export default App;
