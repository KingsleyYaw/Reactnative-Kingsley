import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Getstarted(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "-45deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shorts-3-1613494677.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Dope Shorts</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 15,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}