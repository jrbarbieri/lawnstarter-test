import { Box } from "@mantine/core";

export default function StyledBox({ children, ...props }) {
  return (
    <Box
      p="xl"
      bg="white"
      mt="xl"
      style={{
        boxShadow: "0 3px 5px var(--mantine-color-lightGrey-0)",
        backgroundColor: "white",
        padding: "1.5rem",
        border: "solid 2px var(--mantine-color-lightGrey-0)",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
