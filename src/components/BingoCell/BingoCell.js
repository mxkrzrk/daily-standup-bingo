import './BingoCell.css';

export default function BingoCell({ id, name, onClickCell, on }) {
  return (
    <>
      {on ? (
        <td
          data-id={id}
          onClick={onClickCell}
          style={{ backgroundColor: 'green' }}
        >
          {name}
        </td>
      ) : (
        <td data-id={id} onClick={onClickCell}>
          {name}
        </td>
      )}
    </>
  );
}
