import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
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
          width: 180,
          height: 180,
        }}
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shorts-3-1613494677.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
        }}
      />
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "grey"}}>Sign In to continue</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold", color: "black" }}>Dope Shorts</Text>
      <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            marginTop: 20,
          }}
          placeholder="Enter your username"
        />
      </View>
      <View style={{ marginTop: 12,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your password"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 25,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}