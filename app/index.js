import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

// Import own Components
import CurrencyList from "./screens/CurrencyList";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#FFFFFF",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGrey: "#F0F0F0"
});

export default () => <CurrencyList />;
