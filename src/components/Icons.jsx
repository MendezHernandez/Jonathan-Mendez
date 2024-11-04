import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const MenuBurger = (props) => {
  return <IoMenu size={44} color="var(--complement)" {...props} />;
};

export const CloseIcon = (props) => {
  return <IoIosCloseCircleOutline {...props} />;
};
