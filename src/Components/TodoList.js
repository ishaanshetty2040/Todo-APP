import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList() {
  const todos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      width="100%"
      maxWidth={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <IconButton icon={<FaTrash />} isRound="true" />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
