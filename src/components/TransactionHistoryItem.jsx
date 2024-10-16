const TransactionHistoryItem = ({
    transaction,
    amount,
    status,
    date,
    channel,
    category,
  }) => {
    return (
        <>
        <div className="mt-3"></div>
        <tr
        className={`text-left ${
            status == "Failed" ? "bg-red" : status == "Success" ? "bg-green-50" : ""
          }`}
      >
        <td className="pt-4 py-2 px-4">{transaction}</td> {/* Added pt-4 */}
        <td className={`pt-4 py-2 px-4 ${amount < 0 ? "text-red-500" : "text-green-500"}`}>
          {amount < 0 ? `-$${Math.abs(amount)}` : `$${amount}`}
        </td>
        <td className="pt-4 py-2 px-4">
          <span
            className={`px-2 py-1 rounded-full ${
              status === "Success" ? "bg-green-100 text-green-600" : status === "Failed" ? "bg-red-100 text-red-600" : ""
            }`}
          >
            {status}
          </span>
        </td>
        <td className="pt-4 py-2 px-4">{date}</td>
        <td className="pt-4 py-2 px-4">{channel}</td>
        <td className="pt-4 py-2 px-4">
          <span
            className={`px-2 py-1 rounded-full border ${
              category === "Food and Drink" ? "border-red-500 text-red-500" : "border-blue-500 text-blue-500"
            }`}
          >
            {category}
          </span>
        </td>
      </tr>
      </>
    );
  };
  
  export default TransactionHistoryItem;
  