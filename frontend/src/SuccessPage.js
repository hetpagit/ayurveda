import React from "react";
import { Box, Text, VStack, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <Box p="4" borderRadius="lg">
      <VStack spacing="4">
        <Text fontWeight="bold" fontSize="35px" textColor="blue">
          🌟 Congratulations, {formData?.name}! Your response has been saved
          successfully! 🎉🧘‍♀️
        </Text>
        <Text fontSize="20px">
          Thank you for choosing Ayurveda Centre's Yoga Classes. We are excited
          to have you on board. Below are the details you provided:
        </Text>
        <VStack spacing="2" align="start" fontSize="18px">
          <Text>Name: {formData?.name}</Text>
          <Text>Address: {formData?.address}</Text>
          <Text>Phone Number: {formData?.phoneNumber}</Text>
          <Text>Email: {formData?.email}</Text>
          <Text>Age: {formData?.age}</Text>
          <Text>Selected Batch: {formData?.batch}</Text>
        </VStack>
      </VStack>

      <VStack
        mt="4"
        spacing="4"
        pt="4"
        align="start"
        as="footer"
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        p="4"
      >
        <Text fontWeight="bold">Have Questions or Need Assistance?</Text>
        <Text>
          For any queries or assistance, feel free to contact us at{" "}
          <Link color="purple.500" href="mailto:support@example.com">
            support@example.com
          </Link>
          . or call us on toll free no{" "}
          <Link color="purple.500" href="tel:+18001234567">
            1-800-123-4567 (Toll-Free)
          </Link>
          .
        </Text>
        <Text>
          Visit our center at 123 Yoga Street, Bhopal,MP 462003 to explore the
          enriching world of yoga.
        </Text>
      </VStack>
    </Box>
  );
};

export default SuccessPage;
