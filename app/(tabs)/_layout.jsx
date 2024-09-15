import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../icons/icons";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2 pt-5">
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: focused ? 29 : 24,
          height: focused ? 29 : 24,
          tintColor: color,
        }}
      />
      <Text
        className={`${focused ? "font-psemiBold" : "font-pregular"} text-xs `}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                focused={focused}
                color={color}
                name="Home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.create}
                focused={focused}
                color={color}
                name="Create"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: "Tasks",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.tasks}
                focused={focused}
                color={color}
                name="Tasks"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                focused={focused}
                color={color}
                name="Profile"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="focusTimer"
          options={{
            title: "Focus Timer",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.focusTimer}
                focused={focused}
                color={color}
                name="Focus"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="productivity-stats"
          options={{
            title: "Productivity Stats",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.ProductivityStats}
                focused={focused}
                color={color}
                name="Stats"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
