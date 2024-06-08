import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, Text, FormControl, FormLabel, HStack, Box } from "@chakra-ui/react";
import { FaFutbol } from "react-icons/fa";

const Index = () => {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [prediction, setPrediction] = useState("");

  const handlePredict = () => {
    // Mock prediction logic
    const randomScoreA = Math.floor(Math.random() * 5);
    const randomScoreB = Math.floor(Math.random() * 5);
    setPrediction(`${teamA} ${randomScoreA} - ${randomScoreB} ${teamB}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Sports Event Predictor
        </Heading>
        <FormControl id="teamA">
          <FormLabel>Team A</FormLabel>
          <Input value={teamA} onChange={(e) => setTeamA(e.target.value)} placeholder="Enter Team A" />
        </FormControl>
        <FormControl id="teamB">
          <FormLabel>Team B</FormLabel>
          <Input value={teamB} onChange={(e) => setTeamB(e.target.value)} placeholder="Enter Team B" />
        </FormControl>
        <Button leftIcon={<FaFutbol />} colorScheme="teal" onClick={handlePredict}>
          Predict Result
        </Button>
        {prediction && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="lg" width="100%" textAlign="center">
            <Text fontSize="2xl">{prediction}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
