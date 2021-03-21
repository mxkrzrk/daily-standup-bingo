import { useEffect, useState } from 'react';
import { bingoData } from './data/bingoData';
import shuffleArray from './utils/shuffleArray';
import { v4 as uuidv4 } from 'uuid';
import BingoTable from './components/BingoTable/BingoTable';
import BingoCell from './components/BingoCell/BingoCell';

export default function App() {
  const [userTable, setUserTable] = useState();

  useEffect(() => {
    // Set the random bingo table for the user
    setUserTable(
      shuffleArray(bingoData).map((row) =>
        shuffleArray(row).map((cell) => ({ ...cell, id: uuidv4() }))
      )
    );
  }, []);

  return (
    <div>
      {userTable && (
        <BingoTable>
          {userTable.map((row, index) => (
            <tr key={index}>
              {row.map((cell) => (
                <BingoCell key={cell.id} {...cell} />
              ))}
            </tr>
          ))}
        </BingoTable>
      )}
    </div>
  );
}
