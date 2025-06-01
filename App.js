import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Home";
import DetailScreen from "./Detail";
import AddScreen from "./Add";

const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos((prev) => [...prev, todo]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              todos={todos}
              addTodo={addTodo}
              setTodos={setTodos}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Detail">
          {(props) => (
            <DetailScreen {...props} todos={todos} setTodos={setTodos} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Add"
          options={{ presentation: "modal", title: "Add Todo" }}
        >
          {(props) => (
            <AddScreen
              {...props}
              route={{
                ...props.route,
                params: {
                  ...props.route.params,
                  addTodo,
                },
              }}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
