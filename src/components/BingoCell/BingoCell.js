import './BingoCell.css';

export default function BingoCell({ id, name, onClickCell, on, won }) {
  let cell = null;
  if (won && on) {
    cell = (
      <td
        data-id={id}
        data-on={on}
        data-won={won}
        onClick={onClickCell}
        className="bingo-cell bingo-cell-won"
      >
        {name}
      </td>
    );
  } else if (on && !won) {
    cell = (
      <td
        data-id={id}
        data-on={on}
        data-won={won}
        onClick={onClickCell}
        className="bingo-cell bingo-cell-on"
      >
        {name}
      </td>
    );
  } else {
    cell = (
      <td
        data-id={id}
        data-on={on}
        data-won={won}
        onClick={onClickCell}
        className="bingo-cell"
      >
        {name}
      </td>
    );
  }

  return <>{cell}</>;
}
