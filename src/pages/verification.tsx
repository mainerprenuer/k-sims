"use client";

import { Button, FormControl, Heading, Input, Stack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const toast = useToast();

    const validCodes = ["2024", "1111"];
    if (validCodes.includes(verificationCode)) {
        toast({
            title: 'Welcome',
            description: "You've Logged in Sucessfully.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })

      // Redirect to the dashboard
      window.location.href = "https://k-sims-dashboard.vercel.app/dashboard/students"; 
    } 

   return ( 
            <>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                <FormControl mb="1%" isRequired>
                   <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                       Verification
                   </Heading>
                   <Input placeholder='Enter Verification Code'
                          onChange={(e) => setVerificationCode(e.target.value)}
                          type="text"
                          value={verificationCode} />
                </FormControl>
            </Stack>
            <Stack>
               <Button alignSelf={"center"}
                   onClick={() => {
                       toast({
                           title: "Verification Failed",
                           description: "Invalid verification code. Please try again.",
                           status: "error",
                           duration: 3000,
                           isClosable: true,
                       });
                   } }
                   rounded={'full'}
                   size={'lg'}
                   fontWeight={'normal'}
                   px={6}
                   colorScheme={'green'}
                   bg={'green.500'}
                   _hover={{ bg: 'green.600' }}
               >
                   Check
               </Button>
           </Stack>
           </>
    )
}

export default Verification