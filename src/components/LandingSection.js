import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
    
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    <Avatar src="https://i.pravatar.cc/150?img=7" size="lg"/>
      <Heading as="h6" size="xs">Hi there, this is Liam</Heading>
    <VStack>
      <Heading as="h2"> {bio1} </Heading>
      <Heading as="h2"> {bio2} </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
