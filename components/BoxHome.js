import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../assets/styles/colors";

const BoxHome = ({ title, thumb, screen, navigation }) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => {
          navigation.navigate(screen);
        }}
      >
        <Image style={styles.image} source={thumb} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BoxHome;

const styles = StyleSheet.create({
  box: {
    //backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 90,
    padding: 15,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  image: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: colors.white,
    fontSize: 25,
    marginLeft: 10
  }
});
