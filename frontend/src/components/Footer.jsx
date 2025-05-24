import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" textAlign="center" p={4} mt={10}>
      <Text fontSize="sm" color="gray.500">© 2025 EchoJournal. All rights reserved.</Text>
    </Box>
  );
}
