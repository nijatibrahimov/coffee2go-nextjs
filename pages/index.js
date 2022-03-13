import { Box, Flex, Button, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import Menu from '../components/Menu';


export default function Index() {
  return (
    <>
      <Head>
        <title>Coffee2Go - Hello page</title>
      </Head>

      <Menu />
    </>
  )
}