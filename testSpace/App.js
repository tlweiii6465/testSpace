
import React, { Component } from 'react';
import { StyleSheet, View,Button } from 'react-native';
import Interactable from 'react-native-interactable';

export default class ChatHeads extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Interactable.View
          snapPoints={[
            {x: -140, y: -250},
            {x: 140, y: -250},
            {x: -140, y: -120},
            {x: 140, y: -120},
            {x: -140, y: 0},
            {x: 140, y: 0},
            {x: -140, y: 120},
            {x: 140, y: 120},
            {x: -140, y: 250},
            {x: 140, y: 250, tension: 50, damping: 0.9}
          ]}
          initialPosition={{x: -140, y: -250}}>
          <View>
            <Button title="head"/>
          </View>
        </Interactable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});