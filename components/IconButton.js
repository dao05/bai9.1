import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function IconButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#eee",
    marginHorizontal: 5,
  },
  text: { textAlign: "center" },
});