import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../assets/styles/colors";
import Icon from "react-native-vector-icons/FontAwesome5";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={22} color={colors.yellowLogo} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    marginBottom: 15
  },
  title: {
    fontSize: 22,
    marginLeft: 15,
    color: colors.yellowLogo
  }
});
