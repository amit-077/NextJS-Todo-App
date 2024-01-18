"use client";

import { Box, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async () => {
    const data = await axios.post("/api/auth/register", {
      name,
      email,
      password,
    });
    console.log(data);
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
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box w={"30%"}>
        <Input
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Box>
      <Box w={"30%"}>
        <Input
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
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
          onClick={registerHandler}
        >
          SIGN UP
        </Button>
      </Box>
    </Box>
  );
};

export default page;
