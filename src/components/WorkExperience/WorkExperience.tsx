import * as React from "react";
import { EmploymentWithPositions } from "../../types";
import { Job } from "../Resume/Job";

const WorkExperience = ({
  employment,
}: {
  employment: EmploymentWithPositions[];
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
