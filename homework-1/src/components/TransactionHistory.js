import React from 'react';

const TransactionHistory = ({items}) => (
    <table className="transaction-history">
  <thead className="block-thead">
    <tr className="tr">
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {items.map(({id, type, amount, currency}) => (
      <tbody key={id}>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      </tbody>
  ))}
  </table>
);

export default TransactionHistory;