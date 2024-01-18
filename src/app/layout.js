import UserProvider from "@/components/ContextAPI/Context";
import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{overflowX: "hidden", paddingBottom: "1.5rem"}}>
    <head>
      <title>Todo App</title>
    </head>
      <body>
        <ChakraProvider>
          <UserProvider>
            <Header />
            {children}
          </UserProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
