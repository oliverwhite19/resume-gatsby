import * as React from "react";
import { List, Space, Chip } from "@mantine/core";
import { Point } from "tabler-icons-react";
import { useStyles } from "./Resume.styles";
import { format } from "date-fns";
import { Smol } from "../Text";
import { screenSizes } from "../../theme";
import { useMediaQuery } from "@mantine/hooks";

const Position = ({ position }: { position: Queries.PositionFragment }) => {
  const { classes } = useStyles();
  const { title, details, start, end, technologies } = position.data;
  const isSmallScreen = useMediaQuery(
    `(max-width: ${screenSizes.largeMobile}px)`
  );
  return (
    <div className={classes.position}>
      <h3>{title}</h3>
      <Smol>
        {start && format(Date.parse(start), "LLLL yyy")} -{" "}
        {end ? format(Date.parse(end), "LLLL yyy") : "Present"}
      </Smol>
      <Space h="lg" />
      <List icon={<Point size={16} strokeWidth={3} color={"#862d2e"} />}>
        {details?.map((detail, index) => (
          <List.Item key={index}>{detail?.detail}</List.Item>
        ))}
      </List>
      <Space h="lg" />
      {!isSmallScreen && (
        <Chip.Group position="center">
          {technologies?.map((tech, index) => (
            <Chip
              className={classes.chip}
              color="red"
              variant="filled"
              key={index}
              size="xs"
            >
              {tech?.technology}
            </Chip>
          ))}
        </Chip.Group>
      )}
    </div>
  );
};

export { Position };
