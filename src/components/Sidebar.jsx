import "../styles/Sidebar.css";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { CloseIcon } from "./Icons";
import { LinksNavbarSidebar } from "./Navbar";

const Sidebar = () => {
  const { isSidebarActive, ActiveSidebar, urlActual } = useContext(AppContext);

  const classSidebar = isSidebarActive ? "showSidebar" : "hiddenSidebar";

  return (
    <aside className={` sidebar ${classSidebar}`}>
      <div className="ctn-items-sidebar">
        <div className="ctn-close-icon-sidebar">
          <CloseIcon
            className="close-icon-sidebar"
            size={44}
            onClick={() => ActiveSidebar()}
          />
        </div>
        <LinksNavbarSidebar
          urlActual={urlActual}
          className={"ctn-links-sidebar"}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
