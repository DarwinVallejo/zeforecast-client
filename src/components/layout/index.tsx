import React from "react";
import AppBar from "../appbar";
import { Box, Button, Stack } from "@mui/material";

export type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <AppBar />
      <Stack
        direction="column"
        height={"calc(100vh - 150px)"}
        paddingY={4}
        paddingX={2}
      >
        {children}
      </Stack>
    </main>
  );
};

export default Layout;
