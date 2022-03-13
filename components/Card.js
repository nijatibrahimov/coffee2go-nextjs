import { VStack, HStack, Box, Flex, Image, AspectRatio, Center, Square, Text } from '@chakra-ui/react'
import { darken } from '@chakra-ui/theme-tools'

export default function Card() {
	return (
		<Flex alignItems="flex-start" justifyContent="space-between" flexWrap="wrap" gap={6} mt={6}>
			<Square position="relative" flexDirection="column">
				<Center position="absolute" top={-3} bg="white" color="#242424" maxW="190px" minW="190px" p={1} borderRadius={4}>
					Espresso
				</Center>
				<Image src='espresso.png' borderRadius='10px' />
				<VStack py={4} spacing={4} align='center' w='100%'>
					<Box w='100%'>
						<HStack w='100%' spacing='24px' justifyContent='space-evenly'>
							<Box w='35px' h='35px' bg='gray.100' borderRadius={4} color='#242424' textAlign='center' fontSize='16px' lineHeight='35px'>
								S
							</Box>
							<Box w='35px' h='35px' bg='gray.100' borderRadius={4} color='#242424' textAlign='center' fontSize='16px' lineHeight='35px'>
								M
							</Box>
							<Box w='35px' h='35px' bg='gray.100' borderRadius={4} color='#242424' textAlign='center' fontSize='16px' lineHeight='35px'>
								L
							</Box>
						</HStack>
					</Box>
					<Box w='100%' h='35px' bg='#444444' borderRadius={4}>

					</Box>
					<Box w='100%' h='35px' bg='gray.100' borderRadius={4}>
						3
					</Box>
				</VStack>
			</Square >
			<Square>
				<Image maxW="240px" maxHeight="300px" src='americano.png' borderRadius={4} />
			</Square>
			<Square>
				<Image src='latte.png' borderRadius='10px' />
			</Square>
			<Square>
				<Image src='cappucino.png' borderRadius='10px' />
			</Square>
		</Flex >
	)
}