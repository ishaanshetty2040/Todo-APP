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
      <Heading>Todo Applications</Heading>;
    </VStack>
  );
}

export default App;
