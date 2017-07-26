import React from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Header = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require("./images/gear.png")}
      />
    </TouchableOpacity>
  </View>
);

export default Header;
