import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../icons/icons";

const TabIcon = ({ icon, color, focused }) => {
  return (
    <View>
      <Image
        source={icon}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? color : "#5f6368",
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
