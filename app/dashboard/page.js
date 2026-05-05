'use client';

import { memo } from 'react';
import styles from '../ui/dashboard/dashboard.module.css';
import { MdTrendingUp, MdPeople, MdShoppingCart, MdAttachMoney } from 'react-icons/md';

const DashboardPage = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,543',
      icon: <MdPeople />,
      color: '#64c8ff',
      change: '+12%'
    },
    {
      title: 'Total Sales',
      value: '$54,299',
      icon: <MdAttachMoney />,
      color: '#4ade80',
      change: '+8%'
    },
    {
      title: 'Products',
      value: '2,341',
      icon: <MdShoppingCart />,
      color: '#fbbf24',
      change: '+5%'
    },
    {
      title: 'Revenue',
      value: '$124,500',
      icon: <MdTrendingUp />,
      color: '#f87171',
      change: '+15%'
    }
  ];

  return (
    <div className={styles.dashboardContent}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your performance overview.</p>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon} style={{ borderColor: stat.color }}>
                <div style={{ color: stat.color, fontSize: '24px' }}>
                  {stat.icon}
                </div>
              </div>
              <span className={styles.changeIndicator}>{stat.change}</span>
            </div>
            <h3 className={styles.statTitle}>{stat.title}</h3>
            <p className={styles.statValue}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className={styles.chartsSection}>
        <div className={styles.chartCard}>
          <h2>Recent Activity</h2>
          <div className={styles.placeholderChart}>
            <p>Chart will be displayed here</p>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h2>Top Products</h2>
          <div className={styles.placeholderChart}>
            <p>Chart will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DashboardPage);