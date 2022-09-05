import * as React from "react";
import { Resume } from "../components/Resume/Resume";
import { graphql, PageProps, Script } from "gatsby";

type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};
const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <Resume
      employment={
        data.allMongodbEmployment.nodes as Mutable<Queries.EmploymentFragment[]>
      }
      education={
        data.allMongodbEducation.nodes as Mutable<Queries.EducationFragment[]>
      }
    />
  );
};

export const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="My resume and projects website" />
      <title>Oliver White - Resume</title>
    </>
  );
};

export default IndexPage;
export const query = graphql`
  query IndexPage {
    allMongodbEmployment(
      sort: { fields: positions___employment___positions___start, order: DESC }
    ) {
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
