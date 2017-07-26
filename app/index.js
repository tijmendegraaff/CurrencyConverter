import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

// Import own Components
import Home from "./screens/Home";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#FFFFFF"
});

export default () => <Home />;
