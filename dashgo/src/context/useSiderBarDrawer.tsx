import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SiderBarProviderProps {
  children: ReactNode;
}

type SiderBarDrawerContentProps = UseDisclosureReturn;

export const SiderBarDrawerContent = createContext(
  {} as SiderBarDrawerContentProps
);

export function SiderBarProvider({ children }: SiderBarProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();
  useEffect(() => {
    disclosure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <SiderBarDrawerContent.Provider value={disclosure}>
      {children}
    </SiderBarDrawerContent.Provider>
  );
}

export const useSiderbar = () => useContext(SiderBarDrawerContent);
