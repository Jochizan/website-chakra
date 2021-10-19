import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import type { AppProps } from 'next/app'
import theme from '../libs/theme'
import Fonts from '../components/Fonts'

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
    <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
