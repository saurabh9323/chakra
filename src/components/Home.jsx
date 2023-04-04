import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
pos:"absolute",
left:"50%",
top:"50%",
transform:'translate(-50%,-50%)',
textTransform:"uppercase",
p:'4',
size:'3xl'
}

const Home = () => {
  return <Box>
        <MyCaurosel />
        <Container maxWidth={'container.xl'} minH={'100vh'} p='16'>
           <Heading textTransform={'uppercase'}
           py={'2'} 
           w={'fit-content'} 
           borderBottom={'2px solid'} 
           m={'auto'}
           >
           Services

           </Heading> 
           
           <Stack
           h={'full'}
           p={'4'}
           alignItems={'center'}
           direction={['column','row']}
           >
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Numquam consequuntur fugit consequatur aut, unde magnam 
                 placeat et? Dolores deleniti unde iste voluptates eligendi 
                 dolorem quos at similique beatae quo. Doloremque voluptatibus
                  explicabo aliquid dolorum tempore vero obcaecati animi sapiente, 
                  error aut ipsum necessitatibus reiciendis iure perspiciatis sunt 
                  veritatis. Beatae quibusdam porro nisi pariatur ipsam possimus molestiae
                   commodi incidunt aliquam? Doloremque, eum maxime aliquam iste nulla sunt
                    quidem commodi dicta saepe eligendi magni voluptatibus qui delectus optio
                     veritatis minus soluta rem! Ipsum reprehenderit tempora tenetur quis sint
                      impedit dicta illo odio a deleniti quam quaerat, animi optio minima quod 
                      tempore recusandae. Ipsa voluptatum officia eligendi, error ratione nulla 
                      velit vel porro quaerat delectus corporis, molestiae perferendis exercitationem.
            </Text>
           </Stack>
        </Container>
  </Box>
};

const MyCaurosel = () =>(
    <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
    >
    <Box w={'full'} h={'100vh'}>
       <Img src={img1} />
       <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>WATCH THE FUTURE</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
       <Img src={img2} />
       <Heading bgColor={'whiteAlpha.900'} color={'Black'} {...headingOptions}>FUTURE IS GAMING</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
       <Img src={img3} />
       <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>GAMING ON CONSOLE</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
       <Img src={img4} />
       <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>NIGHT LIFE IS COOL</Heading>
    </Box>
    

    </Carousel>
)

export default Home;