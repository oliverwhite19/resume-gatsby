import styled from "@emotion/styled";
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import * as React from "react";
import { PageProps } from "gatsby";
import { theme } from "../../theme";
import "../../styles/globals.css";

const Wrapper = styled("div")`
  position: relative;
  max-width: 960px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 1.3125rem 100px 1.3125rem;
  @media (max-width: 1000px) : {
    padding: 52px 1.3125rem 100px 1.3125rem;
  }
`;
const Layout = ({ children }: PageProps) => {
  let darkTheme = false;

  React.useEffect(function onFirstMount() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }, []);

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: darkTheme ? "dark" : "light",
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    const newTheme = value || (colorScheme === "dark" ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", newTheme);
    setColorScheme(newTheme);
  };
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...{ colorScheme }, ...theme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Wrapper>{children}</Wrapper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Layout;
