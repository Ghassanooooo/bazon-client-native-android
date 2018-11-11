/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Linking,
  ImageBackground
} from "react-native";
import catImg from "./src/assets/cat.png";

export default class App extends Component {
  state = {
    text: "",
    masseges: []
  };
  onPressSend = () => {
    console.log("the button clicked");
    const cloneState = {
      ...this.state
    };
    cloneState.masseges.push(this.state.text);
    this.setState({ masseges: cloneState.masseges, text: "" });
  };

  render() {
    return (
      <ImageBackground
        source={catImg}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            textAlign: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#850C85"
          }}
        >
          <Text
            style={{ color: "#fff", fontSize: 40, justifyContent: "center" }}
          >
            Bazon
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            height: "80%"
          }}
        >
          {this.state.masseges &&
            this.state.masseges.map((massege, id) => (
              <Text style={{ color: "#fff", fontSize: 20 }} key={id}>
                {massege}
              </Text>
            ))}
        </View>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "red"
          }}
        >
          <View
            style={{
              width: "20%",

              justifyContent: "center"
            }}
          >
            <Button
              onPress={this.onPressSend}
              title="Login"
              color="red"
              accessibilityLabel="Learn more about this purple"
            />
          </View>
          <TextInput
            style={{
              backgroundColor: "#fff",
              marginBottom: 10,
              width: "80%"
            }}
            placeholder="feed message..."
            onChangeText={text => this.setState({ text })}
            textContentType={"password"}
            defaultValue={this.state.text}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
