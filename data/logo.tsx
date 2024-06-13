import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'
// import logo from '/static/logo.png';
import { Image } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  return (
    <Image src='/static/logo.png' alt="Logo" width='40px' height="40px" />
  )
}
