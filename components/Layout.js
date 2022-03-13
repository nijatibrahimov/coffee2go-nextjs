import { Box } from '@chakra-ui/react'
import Header from './defaults/Header'

const Layout = ({ children }) => {
	return (
		<Box backgroundColor='#242424' maxW='100%' width='100%'>
			<Header />
			<main>{children}</main>
		</Box>
	)
}

export default Layout;