import React from "react";
import Button from "../../Button";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";

const HeaderActions = () => {
  return (
    <div>
      <Button variant="icon">
        <HiOutlineShoppingCart />
      </Button>
      <Button variant="icon">
        <HiOutlineUser />
      </Button>
    </div>
  );
};

export default HeaderActions;
