import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    green: ["#0ab463", "#088c4a"],
    lightGrey: ["#dadada", "#c4c4c4"],
    darkGray: ["#383838"],
  },
  components: {
    Text: {
      defaultProps: {
        ff: "Montserrat, sans-serif",
        variant: "default",
        m: 0,
      },
      styles: (theme, props) => ({
        root: {
          letterSpacing: "normal",
          ...(props.variant === "default" && {
            fontSize: 14,
          }),
          ...(props.variant === "header" && {
            color: theme.colors.green[0],
            fontSize: 24,
            fontWeight: 700,
          }),
          ...(props.variant === "title" && {
            fontWeight: 600,
            fontSize: 18,
          }),
          ...(props.variant === "subtitle" && {
            fontWeight: 600,
            fontSize: 16,
          }),
        },
      }),
    },
    Divider: {
      defaultProps: {
        color: "lightGrey.1",
      },
    },
    Button: {
      defaultProps: {
        variant: "filled",
        color: "green.0",
        radius: 24,
      },
      styles: (theme, props) => ({
        inner: {
          height: "35px",
          minHeight: "35px",
        },
        root: {
          height: "35px",
          minHeight: "35px",
          ...(props.variant === "filled" && {
            color: "#fff",
            borderRadius: 24,
            textTransform: "uppercase",
            "&[data-disabled]": {
              backgroundColor: theme.colors.lightGrey[0],
              color: theme.colors.darkGray[0],
              cursor: "not-allowed",
              opacity: 0.7,
            },
          }),
          ...(props.variant === "linkText" && {
            color: theme.colors.green[0],
            borderRadius: 0,
            padding: 0,
            textDecoration: "underline",
            height: "auto",
            backgroundColor: "transparent",
            cursor: "pointer",
          }),
        },
      }),
    },
    Radio: {
      styles: {
        label: {
          fontWeight: 700,
          fontSize: "14px",
          fontFamily: "Montserrat, sans-serif",
        },
      },
    },
  },
});
