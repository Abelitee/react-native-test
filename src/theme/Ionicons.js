import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const IoniconsIconsPack = {
  name: "ionic",
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy(
    {},
    {
      get(target, name) {
        return IconProvider(name);
      },
    }
  );
}

const IconProvider = (name) => ({
  toReactElement: (props) => IonicIcon({ name, ...props }),
});

function IonicIcon({ name, style, onPress }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return (
    <Icon
      onPress={onPress}
      name={name}
      size={height}
      color={tintColor}
      style={iconStyle}
    />
  );
}
