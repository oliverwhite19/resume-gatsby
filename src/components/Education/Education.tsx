import * as React from "react";
import { Paper } from "../Resume/Paper";

const Education = ({
  education,
}: {
  education: Queries.EducationFragment[];
}) => {
  return (
    <>
      <h2>Education</h2>
      {education?.map((edu, index) => (
        <Paper
          key={index}
          title={edu.data.title ?? ""}
          description={edu.data.description ?? ""}
          link={edu.data.link ?? ""}
        />
      ))}
    </>
  );
};

export { Education };
