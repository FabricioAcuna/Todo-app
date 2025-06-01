import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function AddScreen({ navigation, route }) {
  const { addTodo } = route.params || {};
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  function handleAdd() {
    if (newTitle.trim() === "") return;
    addTodo({
      id: Date.now(),
      title: newTitle,
      description: newDesc,
      done: false,
    });
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.header}>Add New Todo</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <TextInput
          style={styles.inputDesc}
          placeholder="Description"
          value={newDesc}
          onChangeText={setNewDesc}
          multiline
        />
        <Button title="Add Todo" onPress={handleAdd} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  inputDesc: {
    height: "40%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    textAlignVertical: "top",
  },
});
