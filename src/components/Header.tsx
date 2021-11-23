import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header(){
    return(
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20" // spaçamento
            mx="auto" // margin horizontal
            mt="4" //
            px="6" // paddihn horizontal
            align="center"
        >
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
                dashgo
                <Text as="span" marginLeft="1" color="pink.500">.</Text>
            </Text>

            <Flex 
                as="label"
                flex="1"
                py="4" // padding vertical
                px="8" // padding horizontal
                ml="6" // margin letf
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full" // borada totalmente aredondada
            >
                <Input
                    color="gray.50"
                    variant="unstyled" // tira bora e background do input
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: 'gray.400'}}
                />
                    <Icon as={RiSearchLine} fontSize="26"/>
            </Flex>

            <Flex
                align="center"
                ml="auto" // joga tudo para o lado desejado com aUTO
            >
                <HStack 
                spacing="8" 
                mx="8"
                pr="6" // padding right
                py="1"
                color="gray.300"
                borderRightWidth={1}
                borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine}/>
                    <Icon as={RiUserAddLine}/>
                </HStack>

                <Flex align="center" >
                    <Box>
                        <Text> Von Harrison</Text>
                        <Text color="gray.300" fontSize="small">
                            diego.schell.f@gamil.com
                        </Text>
                    </Box>
                </Flex>

                <Avatar size="md" name="Von Harrison" src="https://github.com/voncardoso.png"/>
             </Flex>   
        </Flex>
    )
}