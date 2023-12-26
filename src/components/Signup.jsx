import {Container, Heading, Avatar, Text, Input, VStack, Button} from "@chakra-ui/react";
import React from 'react';
import {Link} from 'react-router-dom';


const Signup = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

    <form>
        <VStack  
        alignItems={'stretch'}
        spacing={'8'}
        w={['full','96']}
        m={'auto'}
        my={'11'}
        >
        <Heading textAlign={'center'}>VIDEO HUB</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}/>
        <Input 
        placeholder={'Username'}
        type={'text'}
        required
        focusBorderColor={'purple.500'}
        />
        <Input 
        placeholder={'Email'}
        type={'email'}
        required
        focusBorderColor={'purple.500'}
        />
        <Input 
        placeholder={'Password'}
        type={'password'}
        required
        focusBorderColor={'purple.500'}
        />
        
        <Button colorScheme={'purple'} type={'submit'}>
          Sign Up
        </Button>

        <Text textAlign={'right'}>
           Already User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
             <Link to={'/login'}>Login</Link>
            </Button>
        </Text>
    </VStack>
    </form>
   </Container>
  );
};

export default Signup;