/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default class App extends Component {
  state = {
    gre: null
  };
  onPressLearnMore = () => {
    this.setState({ gre: "Hallo Ghassanooooo IM React Native" });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 250 }}
          source={{
            uri:
              "https://static.next-episode.net/tv-shows-images/huge/one-piece-jp.jpg"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "red"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
