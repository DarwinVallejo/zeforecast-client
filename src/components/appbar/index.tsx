import {
  Box,
  Button,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const AppBar = () => {
  return (
    <MuiAppBar position="static" component={"nav"}>
      <Toolbar variant="dense" sx={{ py: 2 }}>
        <Typography variant="h4">Zebrands</Typography>
        
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
