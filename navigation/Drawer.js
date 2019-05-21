import { createStackNavigator } from "react-navigation";

import Splashscreen from "../screens/Splashsreen/Splashscreen";
import Home from "../screens/Home/Home";
import FindPokemon from "../screens/FindPokemon/FindPokemon";
import MyPokedex from "../screens/MyPokedex/MyPokedex";

const Drawer = createStackNavigator(
  {
    Splashscreen: {
      screen: Splashscreen,
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },

    Home: {
      screen: Home,
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },

    FindPokemon: {
      screen: FindPokemon,
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },

    MyPokedex: {
      screen: MyPokedex,
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    }
  },
  {
    initialRouteName: "Home",
    gesturesEnabled: false
  }
);

export default Drawer;
