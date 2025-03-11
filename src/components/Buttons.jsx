import { NextIcon, PrevIcon } from "./Icons";
import "../styles/Buttons.css";

export function ArrowRightButton({ onClick }) {
  return <NextIcon onClick={onClick} className="btn-next" />;
}

export function ArrowLeftButton({ onClick }) {
  return <PrevIcon onClick={onClick} className="btn-prev" />;
}
