import { Link } from "react-router-dom";
import { theme } from "../theme";

export default function LinkButton({ to, children, style = {}, ...props }) {
  return (
    <Link
      to={to}
      style={{
        color: theme.colors.green[0],
        textDecoration: "none",
        fontWeight: 600,
        ...style,
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
