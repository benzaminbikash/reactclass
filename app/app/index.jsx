import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Index = () => {
  const data = {
    name: "Reshma Ghimire",
    age: 21,
    address: "Chapagaun",
  };
  const router = useRouter();
  return (
    <View>
      <Text>Index</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
        }}
        onPress={() => router.push("home")}
      >
        <Text>Go To Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
          marginVertical: 10,
        }}
        onPress={() =>
          router.push({
            pathname: "user",
            params: data,
          })
        }
      >
        <Text>Go To User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
