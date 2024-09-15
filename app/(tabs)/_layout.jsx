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
          width: 30,
          height: 30,
          tintColor: focused ? "#fdba74" : "#fdba74",
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
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.create} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: "Tasks",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.tasks} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.profile} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="focusTimer"
          options={{
            title: "Focus Timer",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.focusTimer} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="productivity-stats"
          options={{
            title: "Productivity Stats",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.ProductivityStats} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
