import React from "react";
import { FlatList, Text, View } from "react-native";

function GoalItem({ goals }) {
  return (
    <View>
      <FlatList
        data={goals}
        renderItem={(item) => {
          return <Text>{item.item}</Text>;
        }}
        key={Math.random()}
      />
    </View>
  );
}

export default GoalItem;
