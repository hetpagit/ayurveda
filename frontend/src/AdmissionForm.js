import React, { useState } from "react";
import { Input, Button, Select, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const batches = ["6-7AM", "7-8AM", "8-9AM", "5-6PM"];

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    age: "",
    transactionID:"",
    batch: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in formData) {
      if (formData[key] === "") {
        alert("All fields are required!");
        return;
      }
    }
    
    const age = parseInt(formData.age, 10);
    if (age < 18 || age > 65) {
      alert("Age must be between 18 and 65!");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/admission/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    }
    catch (error) {
        console.error("Error:", error);
      }
    
    navigate("/success", { state: { formData } });
  };


  return (
    <VStack spacing="5px">
      
      <FormControl id="name" isRequired>
        <FormLabel> Name</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          mb="3"
          isRequired
        />
      </FormControl>
      <FormControl id="address" isRequired>
        <FormLabel> Address</FormLabel>
        <Input
          type="text"
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          mb="3"
          isRequired
        />
      </FormControl>
      <FormControl id="phoneNumber" isRequired>
        <FormLabel> Phone Number</FormLabel>
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Your Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          mb="3"
          isRequired
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel> Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          mb="3"
          isRequired
        />
      </FormControl>
      <FormControl id="age" isRequired>
        <FormLabel> Age</FormLabel>
        <Input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
          mb="3"
          isRequired
        />
      </FormControl>
      <FormControl id="transactionID" isRequired>
        <FormLabel> Transaction ID</FormLabel>
        <Input
          type="number"
          name="transactionID"
          placeholder="Transaction ID"
          value={formData.transactionID}
          onChange={handleChange}
          mb="3"
          isRequired
        />
      </FormControl>
      <FormControl id="batch" isRequired>
        <FormLabel> Batch</FormLabel>
        <Select
          name="batch"
          placeholder="Select Batch"
          value={formData.batch}
          onChange={(e) =>
            handleChange({ target: { name: "batch", value: e.target.value } })
          }
          mb="3"
          isRequired
        >
          {batches.map((batch) => (
            <option key={batch} value={batch}>
              {batch}
            </option>
          ))}
        </Select>
      </FormControl>

      <Button
        colorScheme="purple"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      
    </VStack>
  );
};

export default AdmissionForm;
