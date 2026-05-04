import Sidebar from "../ui/sidebar/sidebar";
import { memo } from "react";

import "../ui/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (

    <div className="menu">
    <Sidebar />
    </div>
   
  );
};

export default memo(Layout);