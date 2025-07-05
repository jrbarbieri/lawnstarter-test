import { Box, Button, Flex, Text } from "@mantine/core";
import StyledBox from "./StyledBox";
import { useIsMobile } from "../hooks/useIsMobile";

export default function DetailsLayout({
  title,
  leftBlock,
  rightBlock,
  buttonText,
  onButtonClick,
  minHeight = 410,
}) {
  const isMobile = useIsMobile();

  return (
    <StyledBox w={810} h="auto" mx="auto" mih={minHeight}>
      <Text variant="title">{title}</Text>
      <Flex
        gap={isMobile ? 30 : 100}
        direction={isMobile ? "column" : "row"}
        align="start"
        mt="xl"
        mb="xl"
      >
        <Box style={{ flex: 1 }} w="100%">
          {leftBlock}
        </Box>
        <Box style={{ flex: 1 }} w="100%">
          {rightBlock}
        </Box>
      </Flex>
      <Button onClick={onButtonClick} w={isMobile ? "100%" : 200} mt="auto">
        {buttonText}
      </Button>
    </StyledBox>
  );
}
