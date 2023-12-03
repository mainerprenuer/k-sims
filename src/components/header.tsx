import { Image, Heading, HStack } from "@chakra-ui/react";

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
        	boxSize="60px"
			borderRadius="full"
       />
			<Heading>KBMODE</Heading>
			
		</HStack>
	);
}