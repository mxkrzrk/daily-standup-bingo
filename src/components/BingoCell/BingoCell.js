import './BingoCell.css';

export default function BingoCell({ id, name, onClickCell, on }) {
  return (
    <>
      {on ? (
        <td
          data-id={id}
          data-on={on}
          onClick={onClickCell}
          style={{ backgroundColor: 'green' }}
        >
          {name}
        </td>
      ) : (
        <td data-id={id} data-on={on} onClick={onClickCell}>
          {name}
        </td>
      )}
    </>
  );
}
