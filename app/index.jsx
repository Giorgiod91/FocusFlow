import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-3xl">🚀 FocusFlow</Text>
      <Text> Boost Your Productivity Anywhere</Text>
      <StatusBar style="auto" />
      <Button className="bg-secondary border-4" title="Login" />
      <Link href="/profile">go to Profile</Link>
    </View>
  );
}
