import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
    return(
      <VStack borderRadius="lg" bg="white">
        <Image w={"100%"} borderRadius="lg" alignSelf={"center"} src={imageSrc}/>
        <Heading alignSelf={"start"} p={"4"} color="black" as='h2' size='md'>{title}</Heading>
        <Text alignSelf={"start"} p={"4"} color="#686689">{description}</Text>
        <HStack alignSelf={"start"} p={"4"}>
          <Heading color="black" as='h3' size='sm'>See more</Heading>
          <FontAwesomeIcon icon={faArrowRight} color="black" size="1x"/>
        </HStack>
      </VStack>
      
    );
  }


export default Card;
