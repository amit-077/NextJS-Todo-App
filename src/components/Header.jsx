import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { LoginBtn } from "./client/LoginBtn";

const Header = () => {
  return (
    <Box w={"100vw"}>
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pl={"1rem"}
        pr={"1rem"}
        bgColor={"#333"}
        color={"#f5f5f5"}
        pt={"0.5rem"}
        pb={"0.5rem"}
      >
        <Box>
          <Text fontSize={"1.7rem"}>
            <Link href={"/"}>TODO</Link>
          </Text>
        </Box>
        <Box display={"flex"} gap={"4rem"} alignItems={"center"}>
          <Box>
            <Link href={"/"}>
              <Text fontSize={"1.2rem"}>Home</Text>
            </Link>
          </Box>
          <Box>
            <Link href={"#"}>
              <Text fontSize={"1.2rem"}>About</Text>
            </Link>
          </Box>
          <Box>
            <Link href={"/login"}>
              {/* <Text fontSize={'1.2rem'}>Login</Text> */}
              <LoginBtn />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
