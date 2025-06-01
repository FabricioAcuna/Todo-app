import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation, todos, addTodo, setTodos }) {
  const handleTodoPress = (todo) => {
    navigation.navigate("Detail", {
      todo,
      onToggleDone: () => {
        setTodos((prev) => prev.filter((t) => t.id !== todo.id));
        navigation.goBack();
      },
      onDelete: () => {
        setTodos((prev) => prev.filter((t) => t.id !== todo.id));
        navigation.goBack();
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTodoPress(item)}>
            <Text style={styles.todoTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Todo" onPress={() => navigation.navigate("Add")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  todoTitle: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});
