import * as React from "react";
import type { Education as EducationType } from "prisma/generated/client";
import { Paper } from "../Resume/Paper";

const Education = ({ education }: { education: EducationType[] }) => {
  return (
    <>
      <h2>Education</h2>
      {education?.map((edu, index) => (
        <Paper
          key={index}
          title={edu.title ?? ""}
          description={edu.description ?? ""}
          link={edu.link ?? ""}
        />
      ))}
    </>
  );
};

export { Education };
