import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";

import { colors } from "../../assets/styles/colors";

import BoxHome from "../../components/BoxHome";

const pokedex = require("../../assets/images/pokedex.png");
const find = require("../../assets/images/find.png");

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.root]}>
        <Image
          resizeMode={"contain"}
          style={{ width: "100%", height: 150, marginBottom: 25 }}
          source={require("../../assets/images/logo_index.png")}
        />

        <BoxHome
          navigation={this.props.navigation}
          screen={"MyPokedex"}
          thumb={pokedex}
          title={"My Pokedex"}
        />
        <BoxHome
          navigation={this.props.navigation}
          screen={"FindPokemon"}
          thumb={find}
          title={"Find Pokemon!"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.redbg,
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === "ios" ? 45 : 20,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  }
});
