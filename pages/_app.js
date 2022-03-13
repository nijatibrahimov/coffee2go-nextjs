import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '/components/Layout'
import '../styles/global.css'

function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Head>
				<title>Coffee2Go - Home</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default App