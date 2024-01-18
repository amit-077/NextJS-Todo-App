"use client";

import { Box, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../ContextAPI/Context";
import { useRouter } from "next/navigation";

export const LoginBtn = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const logoutUser = () => {
    localStorage.removeItem("Todo-List");
    setUser("");
    router.push("/login");
  };

  return (
    <Box>
      <Button
        bgColor={"#333"}
        color={"#f5f5f5"}
        _hover={{ bgColor: "#353535" }}
        fontWeight={"400"}
        fontSize={"1.2rem"}
        onClick={() => {
          user ? logoutUser() : router.push("/login");
        }}
      >
        {user ? "Logout" : "Login"}
      </Button>
    </Box>
  );
};
