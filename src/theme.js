import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    warmGrey: ["#dadada"],
    headerGreen: ["#0ab463"],
    darkGray: ["#383838"],
    black: ["#000000"],
  },
  components: {
    Text: {
      defaultProps: {
        fw: 400,
        ff: "Montserrat, sans-serif",
        variant: "default",
        m: 0,
      },
      styles: (theme, props) => ({
        root: {
          letterSpacing: "normal",
          ...(props.variant === "header" && {
            color: theme.colors.headerGreen[0],
            fontSize: 24,
            fontWeight: 700,
          }),
          ...(props.variant === "default" && {
            color: theme.colors.darkGray[0],
            fontSize: 8,
          }),
          ...(props.variant === "title" && {
            color: theme.colors.black[0],
            fontWeight: 600,
            fontSize: 9,
          }),
        },
      }),
    },
  },
});
