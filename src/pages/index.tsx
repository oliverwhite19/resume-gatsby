import * as React from "react";
import { Resume } from "../components/Resume/Resume";
import { graphql, PageProps } from "gatsby";

type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};
const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  console.log(data);
  return (
    <Resume
      employment={
        data.allPrismicEmployment.nodes as Mutable<Queries.EmploymentFragment[]>
      }
      education={
        data.allPrismicEducation.nodes as Mutable<Queries.EducationFragment[]>
      }
      description={data.prismicDescription?.data.details as string}
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
    allPrismicEmployment(sort: { fields: data___index, order: ASC }) {
      nodes {
        ...Employment
      }
    }
    allPrismicEducation {
      nodes {
        ...Education
      }
    }
    prismicDescription {
      data {
        details
      }
    }
  }

  fragment Education on PrismicEducation {
    data {
      description
      end
      link
      title
    }
  }

  fragment Position on PrismicPosition {
    data {
      end
      start
      title
      technologies {
        technology
      }
      details {
        detail
      }
    }
  }

  fragment Employment on PrismicEmployment {
    data {
      title
      link
      description
      index
      positions {
        position {
          document {
            ... on PrismicPosition {
              ...Position
            }
          }
        }
      }
    }
  }
`;
