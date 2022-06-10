import React from "react";
import {
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { COLORS, FONTS } from "../constants";

const TextIconButton = ({ containerStyle, label, labelStyle, icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...FONTS.body3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>

      <Image 
        source={icon}
        style={{
          width: 20,
          marginLeft: 5,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  )
}

export default TextIconButton;