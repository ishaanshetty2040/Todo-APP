import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";

function AddTodo({ addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("123");
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input variant="filled" placeholder="Add your todo" />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
