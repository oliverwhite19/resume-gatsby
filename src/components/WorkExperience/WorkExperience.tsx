import * as React from "react";
import { Job } from "../Resume/Job";

const WorkExperience = ({
  employment,
}: {
  employment: Queries.EmploymentFragment[];
}) => {
  return (
    <>
      <h2>Professional Experience</h2>
      {employment?.map((company, index) => (
        <Job key={index} job={company} />
      ))}
    </>
  );
};

export { WorkExperience };
