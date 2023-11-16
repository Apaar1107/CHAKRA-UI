import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
const Home = () => {
    const headingobject={
        pos:"absolute",
        left:"50%",
        top:"50%",
        transform:"translate(-50% ,-50%)",
        textTransform:"uppercase",
        p:"4",
        size:"3xl",
     
    }
    const MyCarousle =()=>(
        <Carousel autoPlay
         infiniteLoop 
          interval={1000} 
          showArrows={false}
           showThumbs={false} 
           showStatus={false}>

            <Box w="full" h={"100vh"}>
               
               <Image src={img1}/>
               <Heading bg={"blackAlpha.600"} color={"white"}  {...headingobject} >
                      watch thr future
               </Heading>
            </Box>

            <Box w="full" h={"100vh"}>
               
               <Image src={img2}/>
               <Heading bg={"whiteAlpha.900"} color={"black"}{...headingobject}  >
                    Future is Gaming
               </Heading>
            </Box>

            <Box w="full" h={"100vh"}>
               
               <Image src={img3}/>
               <Heading bg={"whiteAlpha.600"} color={"black"}{...headingobject}  >
                    Gaming on Console
               </Heading>
            </Box>

            <Box w="full" h={"100vh"}>
               
               <Image src={img4}/>
               <Heading bg={"whiteAlpha.600"} color={"black"}{...headingobject}  >
                    Night life is Cool
               </Heading>
            </Box>

        </Carousel>
    )
  return <Box>
    <MyCarousle/>

    <Container minH={"100vh"} maxW={"container.xl"} p="16">
          <Heading textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
          m="auto"
          >
            Services
          </Heading>

          <Stack 
          h={"full"}
          p={"4"}
          alignItems={"center"}
     
          direction={['column','row']}
          >
         <Image src={img5} filter={"hue-rotate(-130deg)"} h={['40','300']} />

         <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur consectetur inventore labore assumenda ea tenetur, ex quisquam? Officiis voluptatibus veritatis saepe voluptas voluptates harum rem corporis aliquid quidem, ratione omnis sed praesentium perspiciatis commodi similique totam in dolore ullam, aliquam fugiat ad odio assumenda, quaerat minima! Hic voluptatem cum sint fugiat a. Nobis quis, cupiditate nihil debitis quae neque laudantium necessitatibus a facere blanditiis obcaecati, quas assumenda. Quisquam, nam voluptate.
         </Text>
          </Stack>
    </Container>
    
    </Box>

  
}

export default Home