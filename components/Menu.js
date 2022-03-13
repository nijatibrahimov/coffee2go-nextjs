import { Box, Flex } from "@chakra-ui/react"
import Card from '../components/Card'

export default function Menu() {
  return (
    <Box maxW="780px" mx="auto" mt={6}>
      <Flex alignItems="flex-start" justifyContent="space-between" flexWrap="wrap" gap={6} mt={6}>
        <Card image='espresso.png' name='Espresso' />
        <Card image='americano.png' name='Americano' />
        <Card image='cappucino.png' name='Cappucino' />
        <Card image='latte.png' name='Latte' />
      </Flex>
    </Box>
  )
}