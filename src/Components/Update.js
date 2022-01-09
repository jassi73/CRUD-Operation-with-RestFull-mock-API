import {useState,useEffect} from 'react'
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
  RadioGroup,
  Radio
} from "@chakra-ui/react";
import axios from 'axios'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'

function Update() {

  
  return (
    <Box width="50" align="center" justifyContent="center" mt="3">
      <Header mt='6' />
      <SignupArea />
    </Box>
  )
}
const SignupArea = () => {
  return (
    <Flex h="330px" width="50" align="center" justifyContent="center" mt="12">
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
  const [id, setId] = useState('')
    
    const onTrigger = () =>{
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
 useEffect(() => {
  onTrigger()
 }, [])
 
 const onSubmit = () => {
  const payload = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    dob: dob,
    radio: gender
}
axios.put(`http://localhost:3000/users/${id}`,payload)
.then(response => {
alert(` Your Employee Id ${response.data.id} Is Updated` );
});
}
 
  return (
    <Box my={2} textAlign="left">
      <form>
      <Box mt={20}>
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
          ml={385}
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
          <FormControl display="flex" justifyContent='space-between'>
            <FormLabel width="200px" mt={2}>Date of Birth</FormLabel>
            <DatePicker 
            onChange={setDob} 
            value={typeof dob === "string" ? new Date(dob) : dob}
            name="date"
            format='dd-MM-y'
            monthAriaLabel='Month'
            yearAriaLabel='Year'
            wrapperClassName="datePicker"
            />
          </FormControl>
        </Stack>
        <RadioGroup 
        display="flex"
        justifyContent='space-between' 
        onChange={setGender} 
        value={gender}
        mt={5}>
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
          onClick={onSubmit}
        >
        Update
        </Button>
        </Box>
      </form>
    </Box>
  );
};




const Header = () => {
  return (
    <Box textAlign="center">
      <Heading>Update Existing Employee</Heading>
      <Text></Text>
    </Box>
  );
};



export default Update
