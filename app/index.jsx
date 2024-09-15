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
import { Link, Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";
import OrangeButton from "../components/CustomButton";
import StarsBackground from "../components/StarsBackground";

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
    <SafeAreaView className="flex-1 bg-primary">
      <StarsBackground starCount={50} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="">
        <View className="flex-1 justify-center items-center px-5 ">
          {/* Header Text */}
          <Text className="text-5xl font-extrabold text-white tracking-wide mb-5 pr-3">
            🚀 Focus{" "}
            <Text
              className="text-secondary underline"
              style={{
                transform: [{ skewX: "-10deg" }],
                color: "#FFA001",
              }}
            >
              Flow
            </Text>
          </Text>

          {/* Hero Image */}
          <Animated.Image
            source={require("../assets/show.jpg")}
            className="w-[220px] h-[250px] rounded-lg shadow-lg mb-8"
            resizeMode="contain"
            style={{
              opacity: progress.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: progress.interpolate({
                    inputRange: [0, 100],
                    outputRange: [50, 0],
                  }),
                },
              ],
            }}
          />

          <Text className="text-lg text-gray-300 font-medium text-center mb-8">
            Boost Your Productivity Anywhere
          </Text>

          {/* Animated Progress Bar for later */}
          {/* <View
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
        </View> */}

          <OrangeButton
            title="Get Started"
            handlePress={() => router.push("/sign-in")}
            className="w-[60%] py-4 rounded-full bg-[#FFA001] text-white font-semibold text-lg shadow-lg mb-6"
          />

          <Link href="/home" className="text-gray-400 text-base font-semibold">
            Already have an account? Go to Profile
          </Link>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}
