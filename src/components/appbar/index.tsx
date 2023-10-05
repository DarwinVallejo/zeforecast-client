import Image from "next/image";
import { AppBar as MuiAppBar, Toolbar } from "@mui/material";

const AppBar = () => {
  return (
    <MuiAppBar position="static" component={"nav"}>
      <Toolbar variant="dense" sx={{ py: 2 }}>
        <Image
          src={"/zebrands-logo.png"}
          alt={"section logo"}
          width={180}
          height={50}
        />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
