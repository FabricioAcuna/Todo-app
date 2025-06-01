import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { todo, onToggleDone, onDelete } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: todo.title });
  }, [navigation, todo.title]);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        {todo.description || "No description provided."}
      </Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.doneButton} onPress={onToggleDone}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },

  doneButton: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
