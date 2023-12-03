import { Heading, HStack } from "@chakra-ui/react";
import NextChakraLink from "@components/nextChakraLink";


export default function Main() {
	return (
		<HStack
			borderTop="5px #5cfff1 solid"
			justify="space-between"
			bg="#1a202c"
			px="50px"
			py="10px"
			as="header"
		>
			<Heading>KBMODE</Heading>
			
		</HStack>
	);
}