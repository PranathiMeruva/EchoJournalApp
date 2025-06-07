import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Button, Input, VStack, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAuth = async () => {
    setError(null);
    let result;
    if (isSignup) {
      result = await supabase.auth.signUp({ email, password });
    } else {
      result = await supabase.auth.signInWithPassword({ email, password });
    }

    if (result.error) {
      setError(result.error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <VStack spacing={4} mt={10} maxW="400px" mx="auto">
      <Heading>{isSignup ? "Sign Up" : "Login"}</Heading>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Text color="red.500">{error}</Text>}
      <Button colorScheme="teal" onClick={handleAuth}>
        {isSignup ? "Create Account" : "Login"}
      </Button>
      <Button variant="link" onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account? Login" : "No account? Sign up here"}
      </Button>
    </VStack>
  );
}

/* New test*/
