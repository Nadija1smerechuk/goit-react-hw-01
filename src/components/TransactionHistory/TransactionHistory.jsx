
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
return (
        <table className={css.table}>
            <thead className={css.tableTh}>
                <tr>
                    <th className={css.text}>Type</th>
                    <th className={css.text}>Amount</th>
                    <th className={css.text}>Currency</th>
                </tr>
            </thead>
            <tbody >
                {items.map(item => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
};
