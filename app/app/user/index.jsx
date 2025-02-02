import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Index = () => {
  const data = useLocalSearchParams();
  return (
    <View>
      <Text>Index {data.name} </Text>
    </View>
  );
};

export default Index;
