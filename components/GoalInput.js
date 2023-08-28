import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/styles";

export default function GoalInput({ setGoals }) {
  const [inputText, setInputText] = useState("");
  const handleGoalOnPress = () => {
    setGoals((prev) => [...prev, inputText]);
    setInputText("");
  };
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder="Input your Goal!"
        value={inputText}
        onChangeText={(e) => setInputText(e)}
      />
      <Button title="ADD" onPress={handleGoalOnPress} />
    </View>
  );
}
