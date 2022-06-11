import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FONTS, COLORS } from "../constants";

const TextButtonBoarding = ({ buttonContainerStyle, label, labelStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButtonBoarding;
