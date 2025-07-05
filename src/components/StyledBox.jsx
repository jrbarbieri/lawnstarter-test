import { Box } from "@mantine/core";
import { useIsMobile } from "../hooks/useIsMobile";

export default function StyledBox({ children, ...props }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Box
        w="100%"
        h="100%"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
        }}
      >
        {children}
      </Box>
    );
  }

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
