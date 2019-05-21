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

import BoxCatch from "../../components/BtnCatch";

//imports to manage layout
import { colors } from "../../assets/styles/colors";
import Loading from "../../components/Loading";

//imports to manage api
//import { usePokedex } from "../../api/api";

import axios from "axios";

import Header from "../../components/Header";

export default class FindPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textFind: "",
      loading: false,
      pokemon: {}
    };
  }

  async findPokmon() {
    let text = this.state.findText;

    if (isEmpty(text)) {
      Alert.alert(
        "OPS!",
        "Tell me the name or number of the POKEMON!",
        [
          {
            text: "OK"
          }
        ],
        { cancelable: false }
      );

      return false;
    } else {
      this.setState({
        loading: true
      });

      //getting data from POKEAPI
      const baseURL = "https://pokeapi.co/api/v2/pokemon/";

      text = text.toString().toLowerCase();
      await axios
        .get(baseURL + text)
        .then(response => {
          //console.warn(response.data);
          this.setState({ loading: false, pokemon: response.data });
        })
        .catch(error => {
          this.setState({ loading: false, pokemon: {} });
          console.warn(error);
        });

      return false;
    }
  }

  render() {
    return (
      <View style={[styles.root]}>
        <Loading visible={this.state.loading} />

        <Header navigation={this.props.navigation} title={"Find Pokémon"} />

        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.textFind}
            placeholder={"Ex.: Pikachu; Mewtwo; 150"}
            onChangeText={text =>
              this.setState({
                findText: text
              })
            }
          />
          <TouchableOpacity
            onPress={() => {
              this.findPokmon();
            }}
            style={styles.btFind}
          >
            <Text style={{ color: colors.yellowLogo }}>Find!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pokedex}>
          <View style={styles.pokedexVisor}>
            <View style={styles.pokedexVisorInner}>
              {isEmpty(this.state.pokemon) ? (
                <View />
              ) : (
                <View>
                  <Image
                    style={{
                      width: 200,
                      height: 200,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    source={{ uri: this.state.pokemon.sprites.front_default }}
                  />
                </View>
              )}
            </View>
          </View>

          <View style={styles.pokedexDetails}>
            {!isEmpty(this.state.pokemon) && (
              <View style={{ flex: 1 }}>
                <ScrollView>
                  <Text style={styles.infoText}>
                    Name : {this.state.pokemon.name}
                  </Text>
                  <Text style={styles.infoText}>
                    Weight : {this.state.pokemon.weight}
                  </Text>
                  <Text style={styles.infoText}>
                    Height : {this.state.pokemon.height}
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.infoText}>Types: </Text>
                    {this.state.pokemon.types.map((item, index) => {
                      return (
                        <Text style={styles.tagType} key={index}>
                          {item.type.name}
                        </Text>
                      );
                    })}
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.infoText}>Abilities: </Text>
                    {this.state.pokemon.abilities.map((item, index) => {
                      return (
                        <Text style={styles.tagType} key={index}>
                          {item.ability.name}
                        </Text>
                      );
                    })}
                  </View>

                  <Text style={styles.infoText}>
                    Speed : {this.state.pokemon.stats[0].base_stat}
                  </Text>
                  <Text style={styles.infoText}>
                    Defense : {this.state.pokemon.stats[3].base_stat}
                  </Text>
                  <Text style={styles.infoText}>
                    Atack : {this.state.pokemon.stats[4].base_stat}
                  </Text>
                  <Text style={styles.infoText}>
                    HP : {this.state.pokemon.stats[5].base_stat}
                  </Text>
                </ScrollView>

                <BoxCatch pokemon={this.state.pokemon} />
              </View>
            )}
          </View>
        </View>
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
  },
  textFind: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 4
  },
  btFind: {
    backgroundColor: colors.blueLogo,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    position: "absolute",
    top: 0,
    right: 0
  },
  pokedex: {
    marginTop: 25,
    flex: 1
  },
  pokedexVisor: {
    borderColor: colors.black,
    borderWidth: 1,
    backgroundColor: colors.gray,
    width: "100%",
    height: "100%",
    padding: 15,
    flex: 0.45
  },
  pokedexVisorInner: {
    borderColor: colors.black,
    borderWidth: 1,
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  pokedexDetails: {
    flex: 0.55,
    paddingVertical: 15
  },
  tagType: {
    backgroundColor: colors.white,
    paddingVertical: 1.5,
    paddingHorizontal: 3,
    marginRight: 10,
    marginBottom: 1,
    borderRadius: 9
  },
  infoText: {
    marginBottom: 10,
    fontSize: 16
  },

  btCatch: {
    position: "absolute",
    right: 20,
    bottom: 40
  }
});
