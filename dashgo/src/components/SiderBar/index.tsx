import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSiderbar } from "../../context/useSiderBarDrawer";
import { SiderBarNav } from "./SiderBarNav";

export function SiderBar() {
  const {isOpen, onClose} = useSiderbar();
  const drawerSiderBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (drawerSiderBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4" >
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Mavegação</DrawerHeader>
            <DrawerBody>
              <SiderBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SiderBarNav />
    </Box>
  );
}
