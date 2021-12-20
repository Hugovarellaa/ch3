import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSiderbar } from "../../context/useSiderBarDrawer";
import { Logo } from "../Header/Logo";
import { Notification } from "../Header/Notification";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

export function Header() {
  const { onOpen } = useSiderbar();
  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {!isWiderVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
          onClick={onOpen}
        ></IconButton>
      )}
      <Logo />

      {isWiderVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <Notification />

        <Profile showProfileData={isWiderVersion} />
      </Flex>
    </Flex>
  );
}
