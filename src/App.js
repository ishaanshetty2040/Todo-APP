import { Heading } from "@chakra-ui/react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import { VStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
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
      <TodoList />
      <AddTodo />
    </VStack>
  );
}

export default App;
