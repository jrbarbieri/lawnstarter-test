import { Box, Text } from "@mantine/core";

export default function Header() {
  return (
    <Box
      p="md"
      bg="white"
      h={70}
      ta="center"
      justify="center"
      style={{
        boxShadow: "0 2px 0 0 var(--mantine-color-green-0)",
        backgroundColor: "white",
      }}
    >
      <Text variant="header">SWStarter</Text>
    </Box>
  );
}
