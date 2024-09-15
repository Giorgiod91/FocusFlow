import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Animated,
} from "react-native";
import { Link } from "expo-router";

export default function App() {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the progress bar
    Animated.timing(progress, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <SafeAreaView className="flex-1 h-full items-center justify-center bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full">
          <Image
            source={require("../assets/show.jpg")}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
          <Text className="text-3xl font-pblack text-white">🚀 FocusFlow</Text>
          <Text className="text-white  font-pmedium">
            {" "}
            Boost Your Productivity Anywhere
          </Text>

          <View
            style={{
              width: "60%",
              height: 10,
              backgroundColor: "#ccc",
              borderRadius: 5,
              overflow: "hidden",
              marginVertical: 20,
            }}
          >
            <Animated.View
              style={{
                width: progressWidth,
                height: "100%",
                backgroundColor: "#FFA001",
                borderRadius: 5,
              }}
            />
          </View>

          <Button className="bg-secondary border-4" title="Login" />
          <Link href="/home">go to Profile</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
