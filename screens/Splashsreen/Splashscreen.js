import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions
} from "react-native";

export default class Splashscreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 500);
  }

  render() {
    return (
      <View style={styles.root}>
        <ImageBackground
          source={require("../../assets/images/splash.png")}
          style={styles.background}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  background: {
    resizeMode: "contain",
    flex: 1,
    width: "100%",
    position: "relative"
  }
});
