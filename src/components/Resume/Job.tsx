import * as React from "react";
import { Paper } from "./Paper";

const Job = ({ job }: { job: Queries.EmploymentFragment }) => {
  return (
    <Paper
      link={job.companyLink ?? ""}
      title={job.company ?? ""}
      description={job.descriptor ?? ""}
      positions={job.positions as Queries.PositionFragment[]}
    />
  );
};

export { Job };
