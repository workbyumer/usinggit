import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import cart from "./icon-cart.svg";
import { List, ListItem } from "@mui/material";

const CartPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const listItem = [];
  return (
    <div>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        sx={{ backgroundColor: "white" }}
      >
        <img src={cart} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>{listItem.length === 0 ? "Your cart is empty" : listItem}</List>
      </Popover>
    </div>
  );
};

export default CartPopover;
