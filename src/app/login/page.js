"use client";

import { UserContext } from "@/components/ContextAPI/Context";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      router.push("/addTask");
    }
  }, [user]);

  const loginHandler = async () => {
    const data = await axios.post("/api/auth/login", { email, password });
    console.log(data.data);
    if (data.status == 200) {
      localStorage.setItem("Todo-List", JSON.stringify(data.data));
      setUser(data.data);
      router.push("/addTask");
    }
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
          onClick={loginHandler}
        >
          LOGIN
        </Button>
      </Box>
      <Box display={"flex"} w={"100%"} justifyContent={"center"}>
        <Text display={"inline-block"}>Don't have an account? </Text>
        <Link href={"/register"} style={{ color: "#0000bb" }}>
          &nbsp;Register
        </Link>
      </Box>
    </Box>
  );
};

export default page;
