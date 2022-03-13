import { Box, Flex, Button, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import Card from '../components/Card';


export default function Index() {
	return (
		<>
			<Head>
				<title>Coffee2Go - Hello page</title>
			</Head>
			<Box maxW="780px" mx="auto" mt={6}>
				<Box
					as='button'
					height='34px'
					lineHeight='1.2'
					transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
					border='1px'
					px='8px'
					borderRadius='2px'
					fontSize='14px'
					fontWeight='semibold'
					bg='#f2f2f2'
					borderColor='#ccd0d5'
					color='#242424'
					_hover={{ bg: '#ebedf0' }}
					_active={{
						// bg: '#dddfe2',
						transform: 'scale(0.98)',
						borderColor: '#bec3c9',
					}}
					_focus={{
						boxShadow:
							'0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
					}}
				>
					<Icon as={ExternalLinkIcon} pr={2} w={6} h={6} color='#242424' />
					Səbət
				</Box>

				<Card />

			</Box>
		</>
	)
}