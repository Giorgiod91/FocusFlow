import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-3xl font-pblack text-white">🚀 FocusFlow</Text>
      <Text className="text-white  font-pmedium">
        {" "}
        Boost Your Productivity Anywhere
      </Text>
      <StatusBar style="auto" />
      <Button className="bg-secondary border-4" title="Login" />
      <Link href="/home">go to Profile</Link>
    </View>
  );
}
