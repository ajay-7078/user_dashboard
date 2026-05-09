import { memo } from 'react';
import Image from 'next/image';
import styles from './transactions.module.css';

const transactionData = [
  { id: 1, name: 'John Doe', status: 'pending', date: '2 June 2024', amount: '$122.00', image: '/download%20(2).png' },
  { id: 2, name: 'Jane Smith', status: 'completed', date: '1 June 2024', amount: '$310.50', image: '/download%20(2).png' },
  { id: 3, name: 'Mike Johnson', status: 'completed', date: '31 May 2024', amount: '$456.99', image: '/download%20(2).png' },
  { id: 4, name: 'Sarah Wilson', status: 'failed', date: '30 May 2024', amount: '$89.00', image: '/download%20(2).png' },
];

const Transactions = () => {
  const getStatusClass = (status) => {
    return `${styles.status} ${styles[`status-${status}`]}`;
  };

  return (
    <div className={styles.container}>
      <h2>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <div className={styles.userCell}>
                  <Image
                    src={transaction.image}
                    alt={`${transaction.name} profile`}
                    width={40}
                    height={40}
                    className={styles.avatar}
                  />
                  <span>{transaction.name}</span>
                </div>
              </td>
              <td>
                <span className={getStatusClass(transaction.status)}>
                  {transaction.status}
                </span>
              </td>
              <td>{transaction.date}</td>
              <td className={styles.amount}>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Transactions);