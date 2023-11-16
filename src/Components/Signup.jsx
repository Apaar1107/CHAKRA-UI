import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"}  h={"100%"} p={"16"}>
         
    <form >
  <VStack justifyContent={"stretch"}  w={["full","96"]} m={"auto"} my={"16"} spacing={"8"}>
    
    <Heading>
    Video Hub
    </Heading>
    <Avatar alignSelf={"center"} boxSize={"32"}/>
    
     <Input  required type='text' placeholder='Name' focusBorderColor='purple.500'/>
     <Input  required type='email' placeholder='Email' focusBorderColor='purple.500'/>
     <Input  required type='password' placeholder='Password' focusBorderColor='purple.500'/>
     
     <Button colorScheme='purple' type='submit' >
         Sign Up
     </Button>

     <Text textAlign={"right "}>
         Already Signed Up ? {"  "}
         <Button variant={"link"} colorScheme={"purple"}>
         <Link to={'/login'}>Log In</Link>
     </Button>

     </Text>
     
  </VStack>
    </form>
</Container>
  )
}

export default Signup