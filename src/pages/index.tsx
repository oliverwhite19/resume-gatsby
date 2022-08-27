import styled from "@emotion/styled";
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import * as React from "react";
import { Resume } from "../components/Resume/Resume";
import { theme } from "../theme";

import "../styles/fonts/Oxygen.css";
import "../styles/fonts/Cairo.css";
import "../styles/fonts/Amiko.css";
import { graphql, PageProps } from "gatsby";

type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

function MyGlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
        },
        header: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        },
      })}
    />
  );
}

const Layout = styled("div")`
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
const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
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
        <MyGlobalStyles />
        <Layout>
          <Resume
            employment={
              data.allMongodbEmployment.nodes as Mutable<
                Queries.EmploymentFragment[]
              >
            }
            education={
              data.allMongodbEducation.nodes as Mutable<
                Queries.EducationFragment[]
              >
            }
          />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allMongodbEmployment {
      nodes {
        ...Employment
      }
    }
    allMongodbEducation {
      nodes {
        ...Education
      }
    }
  }

  fragment Education on mongodbEducation {
    end
    description
    link
    title
  }

  fragment Position on mongodbPosition {
    title
    technologies
    start
    end
    details
  }

  fragment Employment on mongodbEmployment {
    positions {
      ...Position
    }
    company
    descriptor
    companyLink
  }
`;
