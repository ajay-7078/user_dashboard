
'use client';

import { memo } from "react";
import styles from "./sidebar.module.css";
import { MdDashboard,
         MdSupervisorAccount,
         MdProductionQuantityLimits,
         MdAttachMoney } from "react-icons/md";


const menuItems = [
  { title: "Dashboard",
    path:"/dashboard", icon: <MdDashboard />

   },
  { title: "users",
     path: "/dashboard/users", icon:<MdSupervisorAccount />

  },

  { title: "products",
     path: "/dashboard/products", icon: <MdProductionQuantityLimits />
     },

  { title: "transactions",
     path: "/dashboard/transactions", icon:<MdAttachMoney />

 }
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userSection}>
        <img className={styles.userimage} src="./download (1).png" alt="User Avatar" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>Admin User</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <nav>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.title} className={styles.menuItem}>
              <a href={item.path} className={styles.menuLink}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.title}>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default memo(Sidebar);
