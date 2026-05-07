'use client';

import { memo } from 'react';
import { MdNotifications, MdOutlineChat, MdSearch } from 'react-icons/md';
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  
  return (
    <header className={styles.navbar}>
      <div className={styles.brandSection}>
        <div className={styles.brandMark}>u</div>
        <div>
          <p className={styles.brandTitle}></p>
          <p className={styles.brandSubtitle}>{pathname === "/dashboard" ? "Dashboard" : pathname.split("/").slice(-1)[0].charAt(0).toUpperCase() + pathname.split("/").slice(-1)[0].slice(1)}</p>
        </div>
      </div>

      <div className={styles.searchSection}>
        <div className={styles.searchBox}>
          <MdSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search reports, users, tasks..." />
        </div>
      </div>

      <div className={styles.actionsSection}>
        <button className={styles.actionButton} aria-label="Chat">
          <MdOutlineChat />
        </button>
        <button className={styles.actionButton} aria-label="Notifications">
          <MdNotifications />
        </button>
        
      </div>
    </header>
  );
};

export default memo(Navbar);