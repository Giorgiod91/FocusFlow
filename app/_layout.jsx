import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack className="bg-primary">
      <Stack.Screen name="Home" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
