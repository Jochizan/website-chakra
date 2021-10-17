import { Box, Container, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, Jochizan a full-stack developer based in Peru
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jochizan
          </Heading>
          <p>Digital Craftzman (Creator / Developer / Designer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default HomePage
