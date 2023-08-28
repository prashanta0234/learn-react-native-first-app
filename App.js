import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { styles } from "./styles/styles";

export default function App() {
  const [goals, setGoals] = useState([]);

  const Separator = () => <View style={styles.separator} />;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <GoalInput setGoals={setGoals} />
      </View>
      <Separator />
      <View style={styles.goalContainer}>
        <GoalItem goals={goals} />
      </View>
    </View>
  );
}
