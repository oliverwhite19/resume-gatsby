import * as React from "react";
import { Mail, BrandGithub, BrandLinkedin } from "tabler-icons-react";
import { Button } from "@mantine/core";
import { useStyles } from "./Header.styles";

const buttonStyle = () => ({
  root: {
    paddingLeft: 20,
    "& > *": {
      justifyContent: "flex-start",
      marginLeft: "3rem",
    },
  },
  leftIcon: {
    marginRight: "0.5rem",
  },
});

const ContactModal = () => {
  const { classes } = useStyles();
  return (
    <Button.Group
      sx={{ width: "50%", minWidth: "20rem", margin: "auto" }}
      orientation="vertical"
    >
      <Button
        leftIcon={<Mail size={60} />}
        variant="outline"
        color="red"
        radius="xs"
        size="xl"
        styles={buttonStyle}
        component="a"
        href="mailto:oliverwhite93@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.contactModalButtonContents}>
          <p className={classes.contactModalButtonAction}>Email</p>
          <p className={classes.contactModalButtonAccount}>
            oliverwhite93@gmail.com
          </p>
        </div>
      </Button>
      <Button
        leftIcon={<BrandGithub size={60} />}
        variant="outline"
        color="red"
        radius="xs"
        size="lg"
        styles={buttonStyle}
        component="a"
        href="https://github.com/oliverwhite19"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.contactModalButtonContents}>
          <p className={classes.contactModalButtonAction}>Github</p>
          <p className={classes.contactModalButtonAccount}>oliverwhite19</p>
        </div>
      </Button>
      <Button
        leftIcon={<BrandLinkedin size={60} />}
        variant="outline"
        color="red"
        radius="xs"
        size="lg"
        styles={buttonStyle}
        component="a"
        href="https://www.linkedin.com/in/oliver-white-453a1221a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.contactModalButtonContents}>
          <p className={classes.contactModalButtonAction}>LinkedIn</p>
          <p className={classes.contactModalButtonAccount}>
            oliver-white-453a1221a
          </p>
        </div>
      </Button>
    </Button.Group>
  );
};

export { ContactModal };
