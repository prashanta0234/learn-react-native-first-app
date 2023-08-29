import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";

function GoalItem({ goals, setGoals }) {
  const deleteOnPress = (id) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(id, 1);
    setGoals(updatedGoals);
  };
  return (
    <View>
      <FlatList
        data={goals}
        renderItem={(item) => {
          return (
            <View style={styles.goalList}>
              <Text>{item.item}</Text>
              <Pressable
                onPress={() => deleteOnPress(item.index)}
                style={styles.goalListDel}>
                <Text style={styles.goalListDelText}>Del</Text>
              </Pressable>
            </View>
          );
        }}
        key={Math.random()}
      />
    </View>
  );
}

export default GoalItem;
