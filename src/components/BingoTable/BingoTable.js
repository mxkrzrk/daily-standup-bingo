import './BingoTable.css';
import Table from 'react-bootstrap/Table';

export default function BingoTable({ children }) {
  return (
    <div className="bingo-table-box shadow">
      <Table bordered responsive className="bingo-table">
        <tbody>{children}</tbody>
      </Table>
    </div>
  );
}
