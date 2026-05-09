import { memo } from 'react';
import Transactions from  '../ui/transactions/transactions';

const DashboardPage = () => {

  //   {
  //     title: 'Total Users',
  //     value: '12,543',
  //     icon: <MdPeople />,
  //     color: '#64c8ff',
  //     change: '+12%'
  //   },
  //   {
  //     title: 'Total Sales',
  //     value: '$54,299',
  //     icon: <MdAttachMoney />,
  //     color: '#4ade80',
  //     change: '+8%'
  //   },
  //   {
  //     title: 'Products',
  //     value: '2,341',
  //     icon: <MdShoppingCart />,
  //     color: '#fbbf24',
  //     change: '+5%'
  //   },
  //   {
  //     title: 'Revenue',
  //     value: '$124,500',
  //     icon: <MdTrendingUp />,
  //     color: '#f87171',
  //     change: '+15%'
  //   }
  // ];

  return (
    <div>
      <Transactions />
    </div>
  
  );
};

export default memo(DashboardPage);