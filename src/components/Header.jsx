import { Box, Button, Text, Image } from "@mantine/core";
import { useIsMobile } from "../hooks/useIsMobile";
import { useLocation } from "react-router-dom";

export default function Header() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const showBack = isMobile && location.pathname !== "/";

  return (
    <Box
      p="md"
      bg="white"
      h={70}
      style={{
        boxShadow: "0 2px 0 0 var(--mantine-color-green-0)",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {showBack && (
        <Button
          style={{
            textDecoration: "none",
            fontSize: "1.2rem",
            position: "absolute",
            backgroundColor: "transparent",
            left: 30,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={() => window.history.back()}
        >
          <Image src="/left.png" alt="Back" width={12} height={20} />
        </Button>
      )}
      <Text variant="header">SWStarter</Text>
    </Box>
  );
}
