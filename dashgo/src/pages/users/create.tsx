import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SiderBar } from "../../components/SiderBar";
import { Input } from "../../components/Form/Input";

export default function CreateUsers() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SiderBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Cria Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth={240} spacing="8" w="100%">
              <Input name="name" label="Nome Completo" type="text" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth={240} spacing="8" w="100%">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="password_confirm"
                label="Confirme sua senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">
                <Text>Cancelar</Text>
              </Button>
              <Button colorScheme="pink">
                <Text>Salvar</Text>
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
