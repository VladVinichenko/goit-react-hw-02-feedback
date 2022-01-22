import propTypes from 'prop-types'
import s from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map(item => (
          <tr className={s.item} key={item.id} id={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))

        }
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: propTypes.array.isRequired
}

export default TransactionHistory;
