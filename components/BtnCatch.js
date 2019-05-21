import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

import { colors } from "../assets/styles/colors";

import { connect } from "react-redux";
import { catchpk } from "../actions/actions";

class BtnCatch extends Component {
  constructor(props) {
    super(props);
  }

  capturePokemon() {
    this.props.catchpk(this.props.pokemon);
    Alert.alert(
      "Gotcha!",
      " " + this.props.pokemon.name + " was caugth!!!",
      [
        {
          text: "OK"
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.capturePokemon()}
        style={styles.btCatch}
      >
        <Image
          style={{
            width: 60,
            height: 60
          }}
          source={require("../assets/images/pokeball.png")}
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    catchpk: pokemon => dispatch(catchpk(pokemon))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnCatch);

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    padding: 15,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  btCatch: {
    position: "absolute",
    right: 20,
    bottom: 40
  }
});
