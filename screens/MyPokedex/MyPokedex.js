import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView
} from "react-native";

import { isEmpty } from "lodash";

//imports to manage layout
import { colors } from "../../assets/styles/colors";
import Loading from "../../components/Loading";

import { connect } from "react-redux";

import axios from "axios";

import Header from "../../components/Header";
import MyPokedexProvider from "./MyPokedexProvider";

export default class MyPokedex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.root]}>
        <Header navigation={this.props.navigation} title={"My Pokedex"} />
        <MyPokedexProvider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.redbg,
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === "ios" ? 45 : 20
  }
});
