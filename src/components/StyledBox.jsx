import { Box } from "@mantine/core";

export default function StyledBox({ children, ...props }) {
  return (
    <Box
      p="xl"
      bg="white"
      style={{
        boxShadow: "0 1px 0 0 red",
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "8px",
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
