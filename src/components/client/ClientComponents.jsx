"use client";

import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

export const TodoButton = ({ id, completed, fetchTodos }) => {
  const deleteTodo = async () => {
    const data = await axios.post("/api/deleteTodo", { id });
    fetchTodos();
    console.log(data);
  };

  const changeStatus = async () => {
    const data = await axios.post("/api/completed", { id });
    fetchTodos();
    console.log(data);
  };

  return (
    <Box display={"flex"} alignItems={"center"} gap={"1.5rem"}>
      <Box onClick={changeStatus}>
        <Checkbox
          size={"lg"}
          borderColor={"#777"}
          isChecked={completed}
          // onClick={changeStatus}
        />
      </Box>
      <Box>
        <Button
          bgColor={"#333"}
          color={"#f5f5f5"}
          _hover={{ bgColor: "#454545" }}
          borderRadius={"0"}
          onClick={deleteTodo}
        >
          DELETE
        </Button>
      </Box>
    </Box>
  );
};
