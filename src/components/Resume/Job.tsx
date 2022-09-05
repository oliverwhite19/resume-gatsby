import * as React from "react";
import { Paper } from "./Paper";

const Job = ({ job }: { job: Queries.EmploymentFragment }) => {
  return (
    <Paper
      link={job.data.link ?? ""}
      title={job.data.title ?? ""}
      description={job.data.description ?? ""}
      positions={
        job.data.positions as Array<{
          position: { document: Queries.PositionFragment };
        }>
      }
    />
  );
};

export { Job };
