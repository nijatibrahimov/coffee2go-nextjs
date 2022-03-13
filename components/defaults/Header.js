import { Flex, Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {

	return (
		<Box as='header' backgroundColor='blackAlpha.900' py='3'>
			<Flex alignItems='center' justifyContent='space-around'>
				<Flex alignItems='center'>
					<Image src='logo.png' alt='logotype' placeholder='blur'></Image>
					<Text pl={4} fontSize='2xl'>Coffee2Go</Text>
				</Flex>

				<Flex alignItems='center'>
					<Text pr={6} fontSize='sm'>İsti menu</Text>
					<Box position='relative' borderRadius='50px' w='50px' h='25px' bg='gray.50'>
						<Box position='absolute' top='1px' left='2px' borderRadius='50%' bg='black' w='23px' h='23px'></Box>
					</Box>
				</Flex>
			</Flex>
		</Box>
	)
}

export default Header;