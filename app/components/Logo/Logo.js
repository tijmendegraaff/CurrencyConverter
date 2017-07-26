import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Image
      style={styles.containerImage}
      source={require("./images/background.png")}
      resizeMode="contain"
    >
      <Image
        style={styles.logo}
        source={require("./images/logo.png")}
        resizeMode="contain"
      />
    </Image>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
