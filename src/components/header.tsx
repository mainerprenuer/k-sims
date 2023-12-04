import { Image, Heading, HStack } from "@chakra-ui/react";
import NextChakraLink from "./nextChakraLink";

export default function Main() {
	return (
		<HStack
			borderTop="5px #5cfff1 solid"
			justify="relative"
			bg="#1a202c"
			px="50px"
			py="10px"
			as="header"
		>
			<Image 
    		src="/digital economy logo.png"
       	    alt="Logo" 
        	boxSize="120px"
			borderRadius="full"
       />
			<NextChakraLink href="/">
				<Heading>KBMODE</Heading>
			</NextChakraLink>

			 {/* <HStack> */}
   				{/* <NextChakraLink href="/login">Login</NextChakraLink> */}
   				{/* <NextChakraLink href="/contact">Contact Us</NextChakraLink>   */}
		     {/* </HStack> */}

		</HStack>	
	);
}