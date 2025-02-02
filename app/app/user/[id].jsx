import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const UserDetail = () => {
  const data = useLocalSearchParams();
  console.log(data.id);
  return (
    <View>
      <Text>UserDetail {data.id}</Text>
    </View>
  );
};

export default UserDetail;
