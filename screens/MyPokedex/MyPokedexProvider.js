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

import BoxPokemon from "../../components/BoxPokemon";

import { isEmpty } from "lodash";

//imports to manage layout
import { colors } from "../../assets/styles/colors";
import Loading from "../../components/Loading";

import { connect } from "react-redux";

class MyPokedexProvider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.root]}>
        {isEmpty(this.props.pokemons) ? (
          <Text>0 pokémon captured. You gotta catch em all!</Text>
        ) : (
          <View style={{ flex: 1 }}>
            <ScrollView>
              {this.props.pokemons.map((pokemon, index) => {
                return <BoxPokemon key={index} pokemon={pokemon} />;
              })}
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

const MapStateToProps = state => {
  return {
    pokemons: state.pokemons
  };
};

export default connect(MapStateToProps)(MyPokedexProvider);

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.redbg,
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === "ios" ? 45 : 20
  }
});
