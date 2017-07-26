import React from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require("./images/gear.png")}
      />
    </TouchableOpacity>
  </View>
);

Header.PropTypes = {
  onPress: PropTypes.func
};

export default Header;
