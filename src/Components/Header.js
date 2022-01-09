import { Heading,  Box,  Button , Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = () => {
 
  return (
    <>
    <Box display='flex' p={3} justifyContent="center" mt="0">
      <Heading
        bgGradient="linear(to-l, blue.500, green.200, gray.500)"
        bgClip="text"
      >
        Employees Management
      </Heading>
     
    </Box>
    <Flex display="flex" alignItems='center' justifyContent='center' p={4} >
    <Box>
    <Link to="/">  
      <Button
          width="100px"
          mr={4}
          colorScheme="blue"
        >
          Create
        </Button>
        </Link> 
        <Link to="read">  
        <Button
          width="100px"
          mr={4}
          colorScheme="blue"
        >
          Read
        </Button>
        </Link>
        <Link to="update">  
        <Button
          width="100px"
          mr={4}
          colorScheme="blue"
        >
          Update
        </Button>
        </Link>  
        <Link to="delete">  
        <Button
          width="100px"
          mr={4}
          colorScheme="blue"
        >
          Delete
        </Button>
        </Link>  
        </Box>
      </Flex>
     
    </>
  );
};

export default Header;