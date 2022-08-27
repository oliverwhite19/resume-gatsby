import * as React from "react";
import { Paper as MPaper, Space } from "@mantine/core";
import { P } from "../Text";
import { useStyles } from "./Resume.styles";
import styled from "@emotion/styled";
import { Position } from "./Position";

const CenteredP = styled(P)`
  text-align: center;
`;

interface Props {
  link: string;
  title: string;
  description: string;
  positions?: Queries.PositionFragment[] | null;
}

const Paper = ({ link, title, description, positions }: Props) => {
  const { classes } = useStyles();
  return (
    <MPaper p="md">
      <div className={classes.headerWrapper}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </a>
      </div>

      <CenteredP>{description}</CenteredP>
      <Space h="lg" />
      {positions?.map((position) => (
        <Position key={position.title} position={position} />
      ))}
    </MPaper>
  );
};

export { Paper };
