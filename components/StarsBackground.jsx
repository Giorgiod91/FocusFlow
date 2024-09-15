import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity, View } from "react-native";

const StarsBackground = ({ starCount }) => {
  const generateStars = () => {
    let stars = [];
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 3 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;

      stars.push(
        <View
          key={i}
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "#ffffff",
            left: `${left}%`,
            top: `${top}%`,
          }}
        />
      );
    }

    return stars;
  };

  return (
    <View
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {generateStars()}
    </View>
  );
};

export default StarsBackground;
