import './BingoTable.css';
import Table from 'react-bootstrap/Table';

export default function BingoTable({ children }) {
  return (
    <Table size="lg" bordered={true}>
      <tbody>{children}</tbody>
    </Table>
  );
}
