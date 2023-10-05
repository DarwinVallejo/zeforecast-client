import { Box, Collapse, Stack, Typography } from "@mui/material";
import React from "react";

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
        sx={{
          justifyContent: "flex-start",
        }}
      >
        <Typography
          className="titles"
          sx={{ textShadow: " 0px 1px 9px rgba(52,48,48,0.49);" }}
        >
          {title}
        </Typography>
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
