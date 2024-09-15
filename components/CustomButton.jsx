import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const OrangeButton = ({ title, onPress, style, isLoading, handlePress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={isLoading ? 0.5 : 0.8}
      disabled={isLoading}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFA500",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OrangeButton;
