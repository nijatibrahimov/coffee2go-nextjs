import { VStack, HStack, Box, Image, Center, Square, Divider } from '@chakra-ui/react'
import React, { useEffect } from 'react';

export default function Card({ image, name }) {

  const [count, setCount] = React.useState(0)
  const [price, setPrice] = React.useState(2)

  useEffect(() => {
    setCount(count++);
  }, [count]);




  return (
    <>
      <Square position="relative" flexDirection="column">
        <Center position="absolute" top={-3} bg="gray.50" color="gray.800" maxW="190px" minW="190px" p={1} borderRadius={4}>
          {name}
        </Center>
        <Image src={image} borderRadius='10px' />
        <VStack py={4} spacing={4} align='center' w='100%'>
          <Box w='100%'>
            <HStack w='100%' spacing='24px' justifyContent='space-evenly'>
              <Center w='45px' h='45px' bg='gray.50' borderRadius={4} color='gray.800' fontSize='18px' lineHeight='45px' fontWeight='500'>
                S
              </Center>
              <Center w='45px' h='45px' bg='gray.50' borderRadius={4} color='gray.800' fontSize='18px' lineHeight='45px' fontWeight='500'>
                M
              </Center>
              <Center w='45px' h='45px' bg='gray.50' borderRadius={4} color='gray.800' fontSize='18px' lineHeight='45px' fontWeight='500'>
                L
              </Center>
            </HStack>
          </Box>
          <Box w='100%' h='45px' bg='#444444' borderRadius={4}>
            <HStack h='100%'>
              <Center onClick={() => count + 1} w='33.33%' h='100%' cursor='pointer' userSelect='none'>-</Center>
              <Divider orientation='vertical' h='70%' />
              <Center w='33.33%'> {count} </Center>
              <Divider orientation='vertical' h='70%' />
              <Center onClick={() => count - 1} w='33.33%' h='100%' cursor='pointer' userSelect='none'>+</Center>
            </HStack>
          </Box>
          <Box w='100%' h='45px' bg='gray.50' borderRadius={4}>
            <HStack h='100%'>
              <Center w='100%' maxW='33.33%' color='gray.800'>{price} ₼</Center>
              <Divider orientation='vertical' h='70%' />
              <Center w='100%' color='gray.800'>Əlavə et</Center>
            </HStack>
          </Box>
        </VStack>
      </Square>
    </>
  )
}