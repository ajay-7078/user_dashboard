import Sidebar from "../ui/sidebar/sidebar";
import { memo } from "react";
import styles from "../ui/dashboard/dashboard.module.css";

const DashboardLayout = ({ children }) => {
  return (

    <div className={styles.container}>
      <Sidebar/>
      <div className={styles.menu}>
        {children}
      </div>
    </div>
  );
};

export default memo(DashboardLayout);