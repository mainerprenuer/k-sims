'use client'

import { ChangeEvent, useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormHelperText,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const Form1 = () => {

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      Student Bio Data
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="sur-name" fontWeight={'normal'}>
            Surname
          </FormLabel>
          <Input id="sur-name" placeholder="Surname" />
        </FormControl>

        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First Name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="other-name" fontWeight={'normal'}>
            Other Name
          </FormLabel>
          <Input id="other-name" placeholder="Other name" />
        </FormControl>
      </Flex>
      <Flex>
      <FormControl mt="2%" mr="2" isRequired>
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email Address
        </FormLabel>
        <Input id="email" type="email" placeholder="email" required />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl mt="2%" ml="2" isRequired>
        <FormLabel htmlFor="phone-number" fontWeight={'normal'}>
          Phone Number
        </FormLabel>
        <Input id="phone" type="tel" placeholder="phone number" />
        <FormHelperText>We&apos;ll never share your phone number.</FormHelperText>
      </FormControl>
      </Flex>

      <FormControl isRequired>
        <FormLabel htmlFor="nin" fontWeight={'normal'} mt="2%">
          NIN Number
        </FormLabel>
        <Input id="nin" type="nin" placeholder="nin number" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="dob" fontWeight={'normal'} mt="2%">
         Date Of Birth
        </FormLabel>
          <Input id="dob" type="date" placeholder="DD-MM-YYYY" required />
      </FormControl>
    </>
  )
}

const Form2 = () => {

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      Local Government Information
      </Heading>
      <FormControl isRequired>
        <FormLabel>Local Governments</FormLabel>
          <Select placeholder='Select LGA'>
           <option>Aleiro</option>
           <option>Arewa Dandi</option>
           <option>Argungu</option>
           <option>Aleiro</option>
           <option>Augie</option>
           <option>Bagudo</option>
           <option>Birnin Kebbi</option>
           <option>Bunza</option>
           <option>Dandi</option>
           <option>Fakai</option>
           <option>Gwandu</option>
           <option>Jega</option>
           <option>Kalgo</option>
           <option>Koko/Besse</option>
           <option>Maiyama</option>
           <option>Ngaski</option>
           <option>Sakaba</option>
           <option>Shanga</option>
           <option>Suru</option>
           <option>Danko/Wasagu</option>
           <option>Yauri</option>
           <option>Zuru</option>
          </Select>
      </FormControl>
      <FormControl mt="2%" isRequired>
       <FormLabel>Wards</FormLabel>
        <Select placeholder='Select Ward'>
          <option></option>
          <option></option>
        </Select>
      </FormControl>
      <FormControl mt="2%" isRequired>
     <FormLabel>Pollint Units</FormLabel>
      <Select placeholder='Select polling unit'>
        <option></option>
        <option></option>
      </Select>
      </FormControl>
    </>
  )
}

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Country Of Study
      </Heading>
      <FormControl>
        <FormLabel>Country/Region</FormLabel>
         <Select placeholder='Select country'>
           <option>India</option>
           <option>Sudan</option>
           <option>Egypt</option>
         </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel>State of study</FormLabel>
          <Select placeholder='Select state'>
           <option></option>
           <option></option>
          </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel>City of study</FormLabel>
         <Select placeholder='Select city'>
           <option></option>
           <option></option>
         </Select>
      </FormControl>
    </>
  )
}

const Form4 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Institution Details
      </Heading>

      <FormControl mb="2%" isRequired>
        <FormLabel>Name Of Institution</FormLabel>
          <Input placeholder='Institution name' />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Faculty</FormLabel>
          <Select placeholder='Select Faculty'>
            <option>Science</option>
            <option>Art</option>
          </Select>
      </FormControl>

      <FormControl mt="2%" isRequired>
        <FormLabel>Course of Study</FormLabel>
         <Select placeholder='Select Course'>
          <option>Computer Science</option>
          <option>Medicine</option>
          <option>Law</option>
        </Select>
      </FormControl>
      
      <FormControl mt="2%" isRequired>
        <FormLabel>Select Level</FormLabel>
          <NumberInput max={600} min={100}>
           <NumberInputField />
             <NumberInputStepper>
             <NumberIncrementStepper />
             <NumberDecrementStepper />
           </NumberInputStepper>
          </NumberInput>
      </FormControl>
    </>
  )
}

const Form5 = () => {
  function handleImageChange(_event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
         Image Uploads
      </Heading>

      <FormControl mb="4%" isRequired>
        <FormLabel>Passport Image</FormLabel>
        <label>
          <input type="file" color="white" onChange={handleImageChange} style={{ display: 'none' }}>
          </input>
           <Button as="span">Upload File</Button>
        </label>
      </FormControl>

      <FormControl mb="4%" isRequired>
        <FormLabel>Admission Letter Image</FormLabel>
          <label>
            <input type="file" onChange={handleImageChange} style={{ display: 'none' }}>
            </input>
             <Button as="span">Upload File</Button>
          </label>
      </FormControl>

      <FormControl mb="2%" isRequired>
        <FormLabel>ID Card Image</FormLabel>
        <label>
          <input type="file" onChange={handleImageChange} style={{ display: 'none' }}>
          </input>
           <Button as="span">Upload File</Button>
        </label>
      </FormControl>
    </>
  )
}

export default function Registration() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(22.22)

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" colorScheme="green" isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : step === 3 ? <Form3 /> : step === 4 ? <Form4 /> : <Form5 /> }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 22.22)
                }}
                isDisabled={step === 1}
                colorScheme="green"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 5}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 5) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 22.22)
                  }
                }}
                colorScheme="green"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 5 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "You've Registered Sucessfully.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}
