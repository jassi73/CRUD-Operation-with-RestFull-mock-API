import { useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Radio,
  RadioGroup,
  Button,
} from "@chakra-ui/react";
import axios from 'axios'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'

function Read() {

  return (
    <Box width="50" align="center" justifyContent="center" mt="6">
      <Header />
      <SignupArea />
    </Box>
  )
}
const SignupArea = () => {
  return (
    <Flex h="360px" width="50" align="center" justifyContent="center" mt="8">
      <Box
        px={6}
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
  const [id, setId] = useState('')
  const onTrigger = () => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(response => {
        console.log(response);
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setDob(response.data.dob)
        setEmail(response.data.email)
        setGender(response.data.radio)
      });
  }

  return (
    <Box my={2} textAlign="left" p={4}>
      <form>
        <Box>
          <FormControl>
            <FormLabel>Employee Id</FormLabel>
            <Input
              type="text"
              placeholder="Employee Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </FormControl>

          <Button
            width="80px"
            mt={4}
            ml={335}
            colorScheme="blue"
            size="sm"
            onClick={onTrigger}
          >
            Read
          </Button>
        </Box>
        <Box mt={4}>
          <FormControl display="flex">
            <FormLabel width="200px" mt={2}>First Name</FormLabel>
            <Input
              readOnly={true}
              type="name"
              placeholder="Enter your Full Name"
              value={firstName}
            />
          </FormControl>
          <Stack isInline justifyContent="space-between" mt={4}>
            <FormControl display="flex">
              <FormLabel width="200px" mt={2}>Last Name</FormLabel>
              <Input
                readOnly={true}
                type="last name"
                placeholder="Entter Your Last Name"
                value={lastName}
              />
            </FormControl>
          </Stack>

          <Stack isInline justifyContent="space-between" mt={4}>
            <FormControl display="flex">
              <FormLabel width="200px" mt={2}>Email address</FormLabel>
              <Input
                readOnly="true"
                type="email"
                placeholder="Enter your email address"
                value={email }
              />
            </FormControl>
          </Stack>
          <Stack isInline justifyContent="space-between" mt={4}>
            <FormControl display="flex" justifyContent="space-between">
              <FormLabel width="200px"
               mt={2}>
               Date of Birth
               </FormLabel>
              <DatePicker
               width="200px" 
               readOnly={true} 
               clearable
               value={typeof dob === "string" ? new Date(dob) : dob}
               name="date"
               format='y-MM-dd'
               monthAriaLabel='Month'
               yearAriaLabel='Year'
               wrapperClassName="datePicker"
                />
            </FormControl>
          </Stack>
          <RadioGroup
           display="flex" 
           justifyContent='space-between' 
           readOnly={true}
            value={gender}
             mt={5}>
            <FormLabel width="200px" mt={2}>Gender</FormLabel>
            <Stack direction='row'>
              <Radio value='male'>Male</Radio>
              <Radio value='female'>Female</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </form>
    </Box>
  );
};



const Header = () => {
  return (
    <Box textAlign="center">
      <Heading>Read Existing Employee</Heading>

    </Box>
  );
};



export default Read
