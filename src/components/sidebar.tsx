import { sidebarPages } from "@/constants";
import RecursiveSidebarDisplay from "./recursive-sidebar-display";
import React from "react";

const Sidebar = () => {
  return (
    <RecursiveSidebarDisplay
      sidebarPages={sidebarPages}
      style="pb-0 bg-white"
      isChild={false}
    />
  );
};

export default Sidebar;
