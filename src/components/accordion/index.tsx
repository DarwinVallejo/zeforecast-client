import React, { useState } from "react";
import { Box, Button, Collapse, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { KeyboardArrowDown } from "@mui/icons-material";

type Props = {
  children: JSX.Element;
  title: string;
  open?: boolean;
};

const Accordion = ({ title, children, open = false }: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Box>
      <Button fullWidth variant="text" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}
        <Typography variant="h6">{title}</Typography>
      </Button>
      <Collapse in={isOpen}>{children}</Collapse>
    </Box>
  );
};

export default Accordion;
