import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    warmGrey: ["#dadada"],
    headerGreen: [
      "#0ab463",
      "#0ab463",
      "#0ab463",
      "#0ab463",
      "#0ab463",
      "#0ab463",
      "#0ab463",
      "#088c4a",
      "#088c4a",
      "#088c4a",
    ],
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
          ...(props.variant === "default" && {
            color: theme.colors.darkGray[0],
            fontSize: 18,
          }),
          ...(props.variant === "header" && {
            color: theme.colors.headerGreen[0],
            fontSize: 24,
            fontWeight: 700,
          }),
          ...(props.variant === "title" && {
            color: theme.colors.black[0],
            fontWeight: 600,
            fontSize: 9,
          }),
        },
      }),
    },
    Button: {
      defaultProps: {
        variant: "filled",
        color: "headerGreen",
        radius: 24,
      },
      variants: {
        filled: (theme) => ({
          root: {
            backgroundColor: theme.colors.headerGreen[0],
            color: "#fff",
            borderRadius: 24,
            "&:hover:not([data-disabled])": {
              backgroundColor: theme.colors.headerGreen[7],
            },
            "&[data-disabled]": {
              backgroundColor: theme.colors.warmGrey[0],
              color: theme.colors.darkGray[0],
              cursor: "not-allowed",
              opacity: 0.7,
            },
          },
        }),
      },
    },
  },
});
