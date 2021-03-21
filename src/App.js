import { useEffect, useState } from 'react';
import { bingoData } from './data/bingoData';
import shuffleArray from './utils/shuffleArray';
import checkVictory from './utils/checkVictory';
import { v4 as uuidv4 } from 'uuid';
import BingoTable from './components/BingoTable/BingoTable';
import BingoCell from './components/BingoCell/BingoCell';

export default function App() {
  const [userTable, setUserTable] = useState();

  // Set the random bingo table for the user
  useEffect(() => {
    setUserTable(
      shuffleArray(bingoData).map((row, indexRow) =>
        shuffleArray(row).map((cell, indexCell) => {
          // Set always on the center cell
          if (indexRow === 2 && indexCell === 2) {
            return { ...cell, id: uuidv4(), on: true };
          }
          return { ...cell, id: uuidv4() };
        })
      )
    );
  }, []);

  // Check the user victory
  useEffect(() => {
    if (userTable) return checkVictory(userTable) ? console.log('win') : null;
  }, [userTable]);

  const handleClickCell = ({ target }) => {
    if (target.dataset.on === 'false') {
      target.style.backgroundColor = 'green';
      // Update 'on' property of target cell
      setUserTable((prevState) =>
        prevState.map((row) =>
          row.map((cell) =>
            cell.id === target.dataset.id ? { ...cell, on: true } : { ...cell }
          )
        )
      );
    }
  };

  return (
    <div>
      {userTable && (
        <BingoTable>
          {userTable.map((row, index) => (
            <tr key={index}>
              {row.map((cell) => (
                <BingoCell
                  key={cell.id}
                  {...cell}
                  onClickCell={handleClickCell}
                />
              ))}
            </tr>
          ))}
        </BingoTable>
      )}
    </div>
  );
}
