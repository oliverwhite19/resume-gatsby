import * as React from "react";
import { EmploymentWithPositions } from "../../types";
import { Paper } from "./Paper";

const Job = ({ job }: { job: EmploymentWithPositions }) => {
  return (
    <Paper
      link={job.companyLink ?? ""}
      title={job.company ?? ""}
      description={job.descriptor ?? ""}
      positions={job.positions}
    />
  );
};

export { Job };
