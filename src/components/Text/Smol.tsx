import * as React from "react";
import { useStyles } from "./text.styles";

const Smol = ({ children, ...props }: { children: React.ReactNode } & any) => {
  const { classes } = useStyles();
  return (
    <p className={classes.smol} {...props}>
      {children}
    </p>
  );
};
export { Smol };
