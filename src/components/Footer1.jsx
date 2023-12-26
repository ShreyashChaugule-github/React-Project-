import {Box, Heading,Text, Input, Stack, VStack,HStack,Button} from '@chakra-ui/react';
import React from 'react';
import {AiOutlineSend} from "react-icons/ai";

const Footer1 = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
        <Stack direction={["column","row"]}>
         <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size="md" textTransform={'uppercase'} textAlign={"center"}>
                Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py="2">
                <Input placeholder="Enter Email Here..." border={"none"} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
              <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
         </VStack>
         
         <VStack 
         w={'full'} 
         borderLeft={["none","1px solid white"]}
         borderRight={['none','1px solid white']}
         >
        <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video hub
        </Heading>
        <Text>All right received</Text>
         </VStack>

         <VStack 
         w={'full'} 
        >
        <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
        </Heading>
        <Button variant={'link'} colorScheme={'white'}>
            <a target={"blank"} href="https://youtube.com">YOUTUBE</a>
        </Button>
        <Button variant={'link'} colorScheme={'white'}>
            <a target={"blank"}  href="https://google.com">GOOGLE</a>
        </Button>
        <Button variant={'link'} colorScheme={'white'}>
            <a target={"blank"} href="https://facebook.com">FACEBOOK</a>
        </Button>
         </VStack>


        </Stack>

    </Box>
  )
}

export default Footer1;
