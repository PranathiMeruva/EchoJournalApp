import { Flex, Heading, Spacer, Button, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" p={4} shadow="md" align="center">
      <Heading size="md">EchoJournal</Heading>
      <Spacer />
      <HStack spacing={4}>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
        <Button colorScheme="teal">Login</Button>
        <Button variant="outline">Sign Up</Button>
      </HStack>
    </Flex>
  );
}
