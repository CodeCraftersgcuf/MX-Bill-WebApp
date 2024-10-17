const TransactionHistoryItem = ({
  transaction,
  amount,
  status,
  date,
  channel,
  category,
  isEven,
}) => {
  return (
    <>
      <div className="py-1"></div>
      <tr className={`text-left ${isEven ? "" : "bg-blue-100"}`}>
        <td className="pt-4 py-2 px-4">{transaction}</td>
        <td
          className={`pt-4 py-2 px-4 ${
            amount < 0 ? "text-red" : "text-green-500"
          }`}
        >
          {amount < 0 ? `-$${Math.abs(amount)}` : `$${amount}`}
        </td>
        <td className="pt-4 py-2 px-4">
          <span
            className={`px-2 py-1 rounded-full ${
              status === "Success"
                ? "bg-green-100 text-green-600"
                : status === "Failed"
                ? "text-red border"
                : ""
            }`}
          >
            {status}
          </span>
        </td>
        <td className="pt-4 py-2 px-4">{date}</td>
        <td className="pt-4 py-2 px-4">{channel}</td>
        <td className="pt-4 py-2 px-4">
          <span>{category}</span>
        </td>
      </tr>
    </>
  );
};

export default TransactionHistoryItem;
