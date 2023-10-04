import React from "react";
import AppBar from "../appbar";
import { Box } from "@mui/material";

export type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <AppBar />
      <Box paddingY={4} paddingX={6}>
        {children}
      </Box>
    </main>
  );
};

export default Layout;
