import React from "react";
import { Box, Collapse, Stack, Typography } from "@mui/material";
6;
type Props = {
  children: JSX.Element;
  icon?: JSX.Element;
  title?: string;
  description?: string;
};

const Section = ({ children, icon, title, description }: Props) => {
  return (
    <Box>
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"center"}
        paddingLeft={6}
        sx={{
          justifyContent: "flex-start",
        }}
      >
        <Typography className="titles">{title}</Typography>
        {icon}
      </Stack>
      <Box paddingLeft={8} paddingTop={6} paddingBottom={10}>
        <p>{description}</p>
        {children}
      </Box>
    </Box>
  );
};

export default Section;
