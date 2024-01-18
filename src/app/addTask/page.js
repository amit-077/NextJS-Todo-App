"use client";

import Todo from "@/components/server/Todo";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const fetchTodos = async () => {
    const data = await axios.get("/api/mytask");
    setTodos(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addNewTask = async () => {
    const data = await axios.post("/api/newtask", {
      taskTitle: task,
      taskDescription: description,
    });
    console.log(data);
    fetchTodos();
  };

  return (
    <Box
      w={"100vw"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      mt={"3rem"}
      gap={"1.5rem"}
    >
      <Box w={"30%"}>
        <Input
          placeholder="Enter task title"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </Box>
      <Box w={"30%"}>
        <Input
          placeholder="Enter task description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Box>
      <Box w={"15%"} textAlign={"center"}>
        <Button
          color={"#f5f5f5"}
          bgColor={"#333"}
          pl={"3rem"}
          pr={"3rem"}
          _hover={{ bgColor: "#353535" }}
          letterSpacing={"0.15rem"}
          borderRadius={"0"}
          onClick={addNewTask}
        >
          ADD TASK
        </Button>
      </Box>
      {/* Tasks list */}
      <Box
        mt={"3rem"}
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Box w={"60%"} display={"flex"} flexDir={"column"} gap={"1.5rem"}>
          {todos.map((e) => {
            return (
              <Todo
                title={e.taskTitle}
                description={e.taskDescription}
                id={e._id}
                completed={e.completed}
                fetchTodos = {fetchTodos}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default page;
