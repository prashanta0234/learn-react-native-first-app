import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    paddingTop: 60,
    padding: 20,
    // width: "full",
  },
  inputContainer: {
    // flex: 2,
  },
  inputBox: {
    height: 40,
    // width: "90%",
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    // color: "black",
  },

  goalList: {
    backgroundColor: "#87b4c7",
    marginBottom: 8,
    padding: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  goalListDel: {
    backgroundColor: "red",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 4,
  },
  goalListDelText: {
    color: "white",
  },
  goalContainer: {
    flex: 2,
  },
});
