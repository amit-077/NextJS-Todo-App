import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { TodoButton } from "../client/ClientComponents";

const Todo = ({ title, description, id, completed, fetchTodos }) => {
  return (
    <Box
      w={"100%"}
      bgColor={"#f1f1f1"}
      p={"0.7rem"}
      pl={"1.5rem"}
      pr={'1.5rem'}
      display={"flex"}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box>
        <Box>
          <Text fontSize={"1.2rem"} fontWeight={"bold"}>
            {title}
          </Text>
        </Box>
        <Box>
          <Text fontSize={"1rem"}>{description}</Text>
        </Box>
      </Box>
      <Box>
        <TodoButton id = {id} completed = {completed} fetchTodos = {fetchTodos}/>
      </Box>
    </Box>
  );
};

export default Todo;
