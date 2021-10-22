import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/system'
import { FC } from 'react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section: FC<{ delay: number }> = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transitionDuration="0.8"
    transitionDelay={`${delay}`}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
