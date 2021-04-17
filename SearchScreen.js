import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class Searchscreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dummy QR Code output</Text>
      </View>
    );
  }
}

