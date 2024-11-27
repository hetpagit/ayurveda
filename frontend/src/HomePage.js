import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import QRCode from "qrcode.react";
import AdmissionForm from "../components/AdmissionForm";
import {
  VStack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        background="white"
        width="100%"
        margin="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        padding="3"
      >
        <Box position="absolute" top="0" left="0" p="4">
          <QRCode value="https://www.example.com" size={256} />
          <Text
            backgroundColor="purple"
            borderRadius="lg"
            textColor="white"
            fontSize="sm"
            textAlign="center"
            marginTop="2"
          >
            Scan to pay INR 500 for registeration
          </Text>
        </Box>
        <VStack spacing="4">
          <Text fontSize="xl" fontWeight="bold">
            🌟 Welcome to Ayurveda Centre's Yoga Classes! 🧘‍♀️🌿
          </Text>
          <Text textAlign="justify">
            Embark on a transformative journey for mind, body, and soul
            rejuvenation! Indulge in a holistic yoga experience designed by
            expert instructors. From increased flexibility to stress relief, our
            classes offer a gateway to a healthier, balanced life.
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            Benefits:
          </Text>
          <VStack spacing="2" align="start">
            <Text textAlign="justify">
              🌞 Boost energy, improve flexibility, relieve stress, and foster a
              deeper mind-body connection.
            </Text>
          </VStack>
          <Text fontWeight="bold" fontSize="lg" textAlign="start">
            How to Fill Out:
          </Text>
          <VStack spacing="2" align="start">
            <UnorderedList>
              <ListItem>📝 Credentials: Provide your details.</ListItem>
              <ListItem>
                💳 Payment: Conveniently pay monthly fees via QR code.
              </ListItem>
              <ListItem>
                🧾 Transaction ID: Paste after payment for hassle-free
                enrollment.
              </ListItem>
              <ListItem>
                🕰️ Choose Your Batch: Select from 6-7AM, 7-8AM, 8-9AM, or 5-6PM.
              </ListItem>
            </UnorderedList>
          </VStack>
          <Text textAlign="justify">
            Join Ayurveda Centre's Yoga Classes for a vibrant YOU! 🌈💪
            Experience the path to holistic well-being. Namaste! 🙏✨
          </Text>
        </VStack>
      </Box>

      <Box
        background="white"
        width="100%"
        padding="4"
        borderRadius="lg"
        borderWidth="1px"
      >
        <AdmissionForm />
      </Box>
    </Container>
  );
};
export default HomePage;
