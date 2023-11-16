import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai";
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"}minH={"40"} p={"16"} color={"white"} >
        
        <Stack direction={["column","row" ]}>
      <VStack alignItems={"stretch"} w={"full"} px={"4"}>
        <Heading size={"md"} textTransform={"uppercase"}textAlign={"center"} >
            Subscribe to get Updates
        </Heading>
      
      <HStack borderBottom={"2px solid"} py={"2"}>
        <Input placeholder='Enter email here ...'
         border={"none"} 
         borderRadius={"none"}
          outline={"none"}
        focusBorderColor='npne' />
        <Button
        colorScheme='purple'
        p={"0"}
        variant={"ghost"}
        borderRadius={"0 20px 20px 0"}
        >
          <AiOutlineSend size={"20"}/>
        </Button>
      </HStack>
      </VStack>

      <VStack 
      w={"full "} 
      borderLeft={["none","1px solid"]}
      borderRight={["none","1px solid"]}
    
      >
        <Heading textTransform={"uppercase"} textAlign={"center"}>
        Video Hub
       </Heading>
       <Text>
        All rights recieved
       </Text>

      </VStack>
         
      <VStack 
      w={"full "} 
      
      >
      <Heading size={"md"} textTransform={"uppercase"}>
            Social Media
         </Heading>
         <Button  variant={"link"} color={"purple.300"}>
           <a target={"blank"}   href="https://www.youtube.com"> Youtube</a>
         </Button>

         <Button  variant={"link"}  color={"purple.300"}>
           <a target={"blank"}  href="https://www.instagram.com"> Instagram</a>
           
         </Button>

         <Button  variant={"link"}  color={"purple.300"}>
           <a target={"blank"}   href="https://www.facebook.com"> Facebook</a>
           
         </Button>

         <Button  variant={"link"} color={"purple.300"}>
         
           <a target={"blank"}  href="https://www.twitter.com"> Twitter</a>
           
         </Button>
      
      </VStack>

        </Stack>
    </Box>
  )
}

export default Footer