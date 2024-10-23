import styles from './TransactionHistoryTable.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';
import { Transactions } from '../../util/DummyTransaction';

const TransactionHistoryTable = () => {
  console.log(Transactions)
  return (
    <div className={`shadow-md my-5 rounded-md ${styles.scrollableTable}`}>
      <table className={`w-full table-auto`}>
        <thead>
          <tr className="text-left bg-blue-600 text-white">
            <th className="py-3 px-4">Transaction</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Channel</th>
            <th className="py-3 px-4">Category</th>
          </tr>
        </thead>
        <tbody>
          {Transactions.map((transaction, index) => (
            <TransactionHistoryItem
              key={index}
              transaction={transaction.transaction}
              amount={transaction.amount}
              status={transaction.status}
              date={transaction.date}
              channel={transaction.channel}
              category={transaction.category}
              isEven={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryTable;
