import { Heading } from "@chakra-ui/react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import { VStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
  const initialTodo = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];

  const [todos, setTodos] = useState(
    () =>
      JSON.parse(localStorage.getItem("todos")) ||
      [] /* by creating a function we use localstorage only in initial render and not subsequent changes */
  );

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    ); /* The key is todos and value is todo */
  }, [todos]); /* It fires only when todos changes */

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    /* this function takes in todo as argument from addTodo.js */
    setTodos([...todos, todo]);
  }

  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        font-weight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500,blue.500)"
        bgClip="text"
      >
        Todo Applications
      </Heading>
      ;
      <TodoList todos={todos} deleteTodo={deleteTodo} /> {/* using prop */}
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
