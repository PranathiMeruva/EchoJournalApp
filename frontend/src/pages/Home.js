import { VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <VStack spacing={8} mt={20} align="center">
        <Heading>EchoJournal</Heading>
        <Text fontSize="lg" textAlign="center" maxW="600px">
          A mindful journal app powered by AI to guide your thoughts and brighten your day.
        </Text>
        <HStack spacing={4}>
          <Button colorScheme="teal" onClick={() => navigate("/dashboard")}>Start Your Journal</Button>
          <Button variant="outline" onClick={() => navigate("/login")}>Already have an account? Login</Button>
        </HStack>
      </VStack>
      <Footer />
    </>
  );
}
