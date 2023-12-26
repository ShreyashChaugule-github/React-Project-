import React from 'react';
import { Drawer, DrawerBody,DrawerContent,DrawerHeader,DrawerOverlay,DrawerCloseButton,Button, useDisclosure, VStack, HStack } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi"


const Header1 = () => {

  const{ isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
    <Button  zIndex={"overlay"} pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}>
      <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
         <DrawerOverlay />

        <DrawerContent>
         <DrawerCloseButton/>
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
               <Link to={'/'}>HOME</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
               <Link to={'/videos'}>VIDEOS</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
               <Link to={'/videos?category=free'}>FRESS VIDEOS</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
               <Link to={'/upload1'}>UPLOADS</Link>
              </Button>
            </VStack>

            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                 <Button onClick={onClose} colorScheme={'purple'}>
                  <Link to={'/login'}>LOGIN IN</Link>
                 </Button>
                 <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                  <Link to={'/Signup'}>SIGN UP</Link>
                 </Button>


            </HStack>
          </DrawerBody>
         </DrawerContent>
         
    </Drawer>

    </>
  );
}

export default Header1;
