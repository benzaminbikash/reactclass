import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="home/index" />
      <Stack.Screen name="user/index" />
      <Stack.Screen name="user/[id]" />
    </Stack>
  );
};

export default _layout;
