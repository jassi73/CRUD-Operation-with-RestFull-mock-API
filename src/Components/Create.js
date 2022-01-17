import { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Radio,
  RadioGroup
} from "@chakra-ui/react";
import axios from 'axios'
import DatePicker from 'react-date-picker';
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Create() {


  return (
    <Box mt={5}>
      <Header />
      <SignupArea />
      <ToastContainer position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </Box>
  )
}


const SignupArea = () => {
  return (
    <Flex h="300px" width="50" align="center" justifyContent="center" mt="12">
      <Box
        px={4}
        width="full"
        maxWidth="500px"
        textAlign="center"
      >
        <SignupForm />
      </Box>
    </Flex>
  );
};


const SignupForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState(new Date());
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState('male')

  useEffect(() => {
    if (email.length && !validator.isEmail(email)) {
      toast.error("Enter valid email!")
    }
  }, [email])

  const onTrigger = () => {
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      dob: dob,
      radio: gender
    }
    axios.post('http://localhost:3000/users', payload)
      .then(response => {
        alert(` Your Employee Id Is ${response.data.id}`);
      });
  }

  return (
    <Box my={2} textAlign="left">
      <form>
        <Box>
          <FormControl display="flex">
            <FormLabel width="200px" mt={2}>First Name</FormLabel>
            <Input
              type="name"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <Stack isInline justifyContent="space-between" mt={4}>
            <FormControl display="flex">
              <FormLabel width="200px" mt={2}>Last Name</FormLabel>
              <Input
                type="last name"
                placeholder="Entter Your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </Stack>

          <Stack isInline justifyContent="space-between" mt={4}>
            <FormControl display="flex">
              <FormLabel width="200px" mt={2}>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </FormControl>
          </Stack>
          <Stack isInline justifyContent="space-between" mt={4}>
            <FormControl display="flex" justifyContent="space-between">
              <FormLabel width="200px" mt={2}>Date of Birth</FormLabel>
              <DatePicker
                onChange={setDob}
                name="date"
                format='dd-MM-y'
                monthAriaLabel='Month'
                yearAriaLabel='Year'
                value={typeof dob === "string" ? new Date(dob) : dob}
                wrapperClassName="datePicker"
              />
            </FormControl>
          </Stack>
          <RadioGroup mt={4} display='flex' justifyContent='space-between' onChange={setGender} value={gender}>
            <FormLabel width="200px" mt={2}>Gender</FormLabel>
            <Stack direction='row'>
              <Radio value='male'>Male</Radio>
              <Radio value='female'>Female</Radio>
            </Stack>
          </RadioGroup>
          <Button
            width="full"
            mt={4}
            colorScheme="blue"
            onClick={onTrigger}
          >
            Create
          </Button>
        </Box>
      </form>
    </Box>
  );
};




const Header = () => {
  return (
    <Box textAlign="center">
      <Heading>Create Employee</Heading>
      <Text></Text>
    </Box>
  );
};

export default Create
