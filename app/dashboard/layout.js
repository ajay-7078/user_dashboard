import Sidebar from "../ui/sidebar/sidebar";
import Navbar from "../ui/navbar/navbar";
import { memo } from "react";
import styles from "../ui/dashboard/dashboard.module.css";


const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        <main className={styles.dashboardContent}>{children}</main>
      </div>
    </div>
  );
};

export default memo(DashboardLayout);