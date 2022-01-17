import { useState, useEffect } from 'react'
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

function ListData() {

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

  const [data, setData] = useState([]);
 
  const onTrigger = () => {
    axios.get(`http://localhost:3000/users/`)
      .then(response => {
        console.log(response);
        setData(response.data)
      });
  }
useEffect(() => {
   onTrigger();
}, [])
  return (
    <Box my={2} textAlign="left" p={4}>
      <form>
        <Box>
        {data.map((user) => (
        <div className="user">{user.id}- {user.firstName}</div>
      ))}
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



export default ListData
