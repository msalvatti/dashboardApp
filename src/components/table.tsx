import React from "react";

interface Transaction {
  id: number;
  user: string;
  amount: string;
  date: string;
}

interface TableProps {
  tablesData: {
    recentTransactions: Transaction[];
  };
  isDarkTheme: boolean;
}

const Table: React.FC<TableProps> = ({ tablesData, isDarkTheme }) => {
  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <table
      className={`min-w-full border rounded-lg ${
        isDarkTheme ? "border-gray-200 text-white" : "border-gray-300 text-black"
      }`}
    >
      <thead>
        <tr>
          <th
            className={`py-2 px-3 ${isDarkTheme ? "bg-gray-500" : "bg-gray-200"} border ${
              isDarkTheme ? "border-gray-700" : "border-gray-300"
            } text-left`}
          >
            ID
          </th>
          <th
            className={`py-2 px-3 ${isDarkTheme ? "bg-gray-500" : "bg-gray-200"} border ${
              isDarkTheme ? "border-gray-700" : "border-gray-300"
            } text-left`}
          >
            User
          </th>
          <th
            className={`py-2 px-3 ${isDarkTheme ? "bg-gray-500" : "bg-gray-200"} border ${
              isDarkTheme ? "border-gray-700" : "border-gray-300"
            } text-left`}
          >
            Amount
          </th>
          <th
            className={`py-2 px-3 ${isDarkTheme ? "bg-gray-500" : "bg-gray-200"} border ${
              isDarkTheme ? "border-gray-700" : "border-gray-300"
            } text-left`}
          >
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        {tablesData.recentTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className={`py-2 px-3 border ${isDarkTheme ? "border-gray-600" : "border-gray-300"}`}>
              {transaction.id}
            </td>
            <td className={`py-2 px-3 border ${isDarkTheme ? "border-gray-600" : "border-gray-300"}`}>
              {transaction.user}
            </td>
            <td className={`py-2 px-3 border ${isDarkTheme ? "border-gray-600" : "border-gray-300"}`}>
              {transaction.amount}
            </td>
            <td className={`py-2 px-3 border ${isDarkTheme ? "border-gray-600" : "border-gray-300"}`}>
              {formatDateString(transaction.date)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
