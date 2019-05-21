import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Platform,
  ScrollView
} from "react-native";

import { colors } from "../assets/styles/colors";

import Icon from "react-native-vector-icons/FontAwesome5";

import { connect } from "react-redux";
import { deletepk } from "../actions/actions";

class BoxPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false
    };
  }

  deletepokemon(pk) {
    this.props.deletepk(pk);
    Alert.alert(
      "Ok!",
      " " + pk.name + " was deleted from your pokédex!!!",
      [
        {
          text: "OK"
        }
      ],
      { cancelable: false }
    );
  }

  showInfo(pokemon) {
    this.setState({
      visibleModal: true
    });
  }

  render() {
    return (
      <View style={styles.box}>
        <Modal visible={this.state.visibleModal}>
          <View style={styles.modal}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{
                  width: 250,
                  height: 250
                }}
                source={{ uri: this.props.pokemon.sprites.front_default }}
              />
            </View>

            <ScrollView style={{ flex: 1 }}>
              <Text style={styles.infoText}>
                Name : {this.props.pokemon.name}
              </Text>
              <Text style={styles.infoText}>
                Weight : {this.props.pokemon.weight}
              </Text>
              <Text style={styles.infoText}>
                Height : {this.props.pokemon.height}
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.infoText}>Types: </Text>
                {this.props.pokemon.types.map((item, index) => {
                  return (
                    <Text style={styles.tagType} key={index}>
                      {item.type.name}
                    </Text>
                  );
                })}
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.infoText}>Abilities: </Text>
                {this.props.pokemon.abilities.map((item, index) => {
                  return (
                    <Text style={styles.tagType} key={index}>
                      {item.ability.name}
                    </Text>
                  );
                })}
              </View>

              <Text style={styles.infoText}>
                Speed : {this.props.pokemon.stats[0].base_stat}
              </Text>
              <Text style={styles.infoText}>
                Defense : {this.props.pokemon.stats[3].base_stat}
              </Text>
              <Text style={styles.infoText}>
                Atack : {this.props.pokemon.stats[4].base_stat}
              </Text>
              <Text style={styles.infoText}>
                HP : {this.props.pokemon.stats[5].base_stat}
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.btnClose}
              onPress={() => {
                this.setState({ visibleModal: false });
              }}
            >
              <Text style={{ color: colors.white, fontSize: 24 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => {
              this.showInfo(this.props.pokemon);
            }}
          >
            <Image
              style={styles.image}
              source={{ uri: this.props.pokemon.sprites.front_default }}
            />

            <Text style={{ fontSize: 24, marginTop: 10 }}>
              {this.props.pokemon.name.charAt(0).toUpperCase() +
                this.props.pokemon.name.slice(1)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ position: "absolute", top: 15, right: 25 }}
            onPress={() => {
              this.deletepokemon(this.props.pokemon);
            }}
          >
            <Icon name="trash" size={20} color={colors.redbg} />
          </TouchableOpacity>
        </View>
      </View>
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
    deletepk: pokemon => dispatch(deletepk(pokemon))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxPokemon);

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    padding: 15,
    margin: 5,
    justifyContent: "center",
    //alignItems: "center",
    width: "100%",
    borderRadius: 50,
    position: "relative"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20
    // justifyContent: "center",
    // alignItems: "center"
  },
  modal: {
    flex: 1,
    padding: 15,
    paddingTop: Platform.OS === "ios" ? 50 : 30,
    backgroundColor: "rgba(203, 34, 41, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  infoText: {
    fontSize: 17,
    marginBottom: 15
  },
  tagType: {
    fontSize: 17,
    marginRight: 5
  },
  btnClose: {
    marginBottom: Platform.OS === "ios" ? 50 : 30,
    borderWidth: 2,
    borderColor: colors.white,
    padding: 15
  }
});
