'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  IconProps,
  useColorModeValue,
  Divider,
  Center,
} from '@chakra-ui/react'
import NextChakraLink from '@components/nextChakraLink'

export default function CallToAction() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}>
              Kebbi State Students'
            </Text>
            <br />
            <Text as={'span'} color={'green.400'}>
              Management System in Diaspora!
            </Text>
          </Heading>
          
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
           <NextChakraLink href="http://localhost:3000/dashboard/students">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
              Click to Register
            </Button>
          </NextChakraLink>
            {/* <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={'gray.400'} />}>
              How It Works
            </Button> */}
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('green.50', 'green.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={''}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'130%'}
              src={
                'https://cdn.vanguardngr.com/wp-content/uploads/2023/04/Kebbi-.jpg'
              }
            />
          </Box>
        </Flex>
      </Stack>
      
      <Center height='100px'>
        <Divider orientation='horizontal' />
      </Center>

      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={2} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}>
              Our Sponsor
            </Text>
          </Heading>
          
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
          <Text as={'span'} color={'white.400'}>
            This platform aligns perfectly with the Ministry's vision of promoting digital literacy by offering students convenient access to academic resources and streamlining administrative tasks for educators. 
            <br/><br/>
            By bridging the digital divide and empowering Kebbi state's youth through education, we can lay the foundation for a brighter future. Imagine parents receiving real-time updates on their children's progress and educators spending less time on paperwork and more time on personalized learning. That's the transformative potential of the Kebbi Students' Management System.
            <br/><br/>
            We invite you to join us in making this vision a reality.
            <br/><br/><br/>
              <Text as="span" fontWeight="700">
                - Hon. Ibrahim M. Muhammad
              <br/>
              Commissioner, Ministry of Digital Economy,
              <br/>
              Kebbi State.
              </Text>
            </Text>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
           
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'150%'}
              h={'150%'}
              src="/com-dig.jpg"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
    
  )
}


const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}



