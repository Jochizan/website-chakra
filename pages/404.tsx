import type { NextPage } from 'next'
import NextLink from 'next/link'
import {
  Box,
  Text,
  Container,
  Heading,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound: NextPage = () => {
  return (
    <Container>
      <Heading as="h1">Not Found </Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
