import PropTypes from "prop-types";
import {TransactionTable, TransactionTableHead, TransactionTableBody} from './TransactionHistory.styled'

const TransactionHistory = ({items}) => (
    <TransactionTable>
  <TransactionTableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TransactionTableHead>

  <TransactionTableBody>
    {items.map(({id, type, amount, currency}) => (
        <tr key={id}>
         <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
        </tr>

    ))}
  </TransactionTableBody>
</TransactionTable>
)

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
      })
    )
}

export default TransactionHistory;