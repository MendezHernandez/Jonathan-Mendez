import { IoMenu } from "react-icons/io5";
import {
  IoIosCloseCircleOutline,
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

export const MenuBurger = (props) => {
  return <IoMenu size={44} color="var(--complement)" {...props} />;
};

export const CloseIcon = (props) => {
  return <IoIosCloseCircleOutline {...props} />;
};

export const NextIcon = (props) => {
  return <IoIosArrowDroprightCircle size={50} {...props} />;
};

export const PrevIcon = (props) => {
  return <IoIosArrowDropleftCircle size={50} {...props} />;
};
