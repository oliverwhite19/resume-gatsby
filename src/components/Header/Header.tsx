import * as React from "react";
import { ThemeSwitch } from "../ThemeSwitch/themeSwitch";
import { useStyles } from "./Header.styles";
import { Stack, Button, Avatar, Modal, useMantineTheme } from "@mantine/core";
import { H1, P } from "../Text";
import { screenSizes } from "../../theme";
import { useState } from "react";
import { ContactModal } from "./ContactModal";
import { useMediaQuery } from "@mantine/hooks";

const Header = ({ withDescription }: { withDescription: boolean }) => {
  const { classes } = useStyles();

  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(
    `(max-width: ${screenSizes.largeMobile}px)`
  );

  return (
    <>
      <Stack>
        <div className={classes.titleContainer}>
          <H1
            variant="gradient"
            gradient={{
              from: theme.colorScheme === "dark" ? "white" : "black",
              to: "red",
              deg: 45,
            }}
          >
            Oliver White
          </H1>
          <ThemeSwitch />
        </div>
        {withDescription && (
          <>
            <div className={classes.buttonContainer}>
              <a
                href="/files/OliverWhiteResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size={isSmallScreen ? "md" : "lg"}
                  color="red"
                  compact={isSmallScreen}
                  variant="outline"
                >
                  Download PDF Resume
                </Button>
              </a>

              <Button
                onClick={() => setOpened(true)}
                size={isSmallScreen ? "md" : "lg"}
                color="red"
                compact={isSmallScreen}
                variant="outline"
              >
                Contact
              </Button>
            </div>
            <div className={classes.avatarContainer}>
              <Avatar
                radius="xl"
                size="xl"
                color="red"
                src="static/author_.png"
                alt="A picture of me!"
                sx={{ img: { height: "84px", width: "84px" } }}
              />
              <P>
                I am Oliver White and I am a Software Developer with 5 years of
                experience leading and contributing to a wide variety of
                projects. I have a degree in Computer Engineering with a
                specialization in Software Engineering. I am experienced with
                many different fields from computer hardware to cloud-based
                software design!
              </P>
            </div>
          </>
        )}
      </Stack>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Contact"
        centered
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.7}
        overlayBlur={9}
        fullScreen
      >
        <ContactModal />
      </Modal>
    </>
  );
};

export { Header };
