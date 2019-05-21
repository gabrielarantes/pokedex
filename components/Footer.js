import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../assets/styles/colors";

const Footer = ({ title, thumb, screen, navigation }) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screen);
        }}
      >
        <Image style={styles.image} source={thumb} />
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    padding: 15,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
