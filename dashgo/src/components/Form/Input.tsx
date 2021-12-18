import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputProps as InputChakraProps,
} from "@chakra-ui/react";

interface InputProps extends InputChakraProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputChakra
        id={name}
        name={name}
        {...rest}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
      />
    </FormControl>
  );
}
