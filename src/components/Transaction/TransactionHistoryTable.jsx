import TransactionHistoryItem from './TransactionHistoryItem';

const transactions = [
  { transaction: 'Uber 063015 SFPOOL', amount: 5.4, status: 'Success', date: 'Wed, Apr 24, 5:30 AM', channel: 'Online', category: 'Travel' },
  { transaction: 'United Airlines', amount: -500, status: 'Success', date: 'Mon, Apr 22, 5:30 AM', channel: 'In Store', category: 'Travel' },
  { transaction: 'McDonalds', amount: 12, status: 'Failed', date: 'Sun, Apr 21, 5:30 AM', channel: 'In Store', category: 'Food and Drink' },
  { transaction: 'Starbucks', amount: 4.33, status: 'Success', date: 'Sun, Apr 21, 5:30 AM', channel: 'In Store', category: 'Food and Drink' },
  { transaction: 'SparkFun', amount: 89.4, status: 'Success', date: 'Sat, Apr 20, 5:30 AM', channel: 'In Store', category: 'Food and Drink' },
  { transaction: 'Uber 072515 SFPOOL', amount: 6.33, status: 'Success', date: 'Sun, Apr 7, 5:30 AM', channel: 'Online', category: 'Travel' },  { transaction: 'Uber 072515 SFPOOL', amount: 6.33, status: 'Success', date: 'Sun, Apr 7, 5:30 AM', channel: 'Online', category: 'Travel' },
  { transaction: 'Uber 072515 SFPOOL', amount: 6.33, status: 'Success', date: 'Sun, Apr 7, 5:30 AM', channel: 'Online', category: 'Travel' },
  { transaction: 'Uber 072515 SFPOOL', amount: 6.33, status: 'Success', date: 'Sun, Apr 7, 5:30 AM', channel: 'Online', category: 'Travel' },
  { transaction: 'Uber 072515 SFPOOL', amount: 6.33, status: 'Success', date: 'Sun, Apr 7, 5:30 AM', channel: 'Online', category: 'Travel' },
  { transaction: 'Uber 072515 SFPOOL', amount: 6.33, status: 'Success', date: 'Sun, Apr 7, 5:30 AM', channel: 'Online', category: 'Travel' },
];

const TransactionHistoryTable = () => {
  return (
    <div className="w-[95%] overflow-x-auto me-20">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left bg-gray-200">
            <th className="py-2 px-4">Transaction</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Channel</th>
            <th className="py-2 px-4">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <TransactionHistoryItem
              key={index}
              transaction={transaction.transaction}
              amount={transaction.amount}
              status={transaction.status}
              date={transaction.date}
              channel={transaction.channel}
              category={transaction.category}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryTable;
