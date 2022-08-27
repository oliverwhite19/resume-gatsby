import * as React from "react";
import { Education } from "../Education/Education";
import { Header } from "../Header/Header";
import { WorkExperience } from "../WorkExperience/WorkExperience";
import { useStyles } from "./Resume.styles";

const Resume = ({
  employment,
  education,
}: {
  employment: any[];
  education: any[];
}) => {
  const { classes } = useStyles();
  return (
    <>
      <Header withDescription />
      <section className={classes.section}>
        <WorkExperience employment={employment} />
      </section>
      <section className={classes.section}>
        <Education education={education} />
      </section>
    </>
  );
};

export { Resume };
