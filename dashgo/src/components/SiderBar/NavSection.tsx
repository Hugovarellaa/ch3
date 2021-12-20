import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="smal">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
