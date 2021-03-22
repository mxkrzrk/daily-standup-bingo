import { useEffect, useState } from 'react';
import { bingoData } from './data/bingoData';
import shuffleArray from './utils/shuffleArray';
import { checkVictory, resetWinTable } from './utils/checkVictory';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import BingoTable from './components/BingoTable/BingoTable';
import BingoCell from './components/BingoCell/BingoCell';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './components/Header/Header';
import Col from 'react-bootstrap/Col';
import BingoWon from './components/BingoWon/BingoWon';
import ResetButton from './components/ResetButton/ResetButton';

export default function App() {
  const [userTable, setUserTable] = useState();
  const [won, setWon] = useState(false);
  const [reset, setReset] = useState(false);

  // Set the random bingo table for the user
  useEffect(() => {
    setUserTable(
      shuffleArray(bingoData).map((row, indexRow) =>
        shuffleArray(row).map((cell, indexCell) => {
          // Set always on for the center cell
          if (indexRow === 2 && indexCell === 2) {
            return {
              ...cell,
              id: uuidv4(),
              on: true,
              name: 'Standup Bingo 🚀',
            };
          }
          return { ...cell, id: uuidv4() };
        })
      )
    );
  }, [reset]);

  // Check the user victory
  useEffect(() => {
    if (userTable) {
      const victoryData = checkVictory(userTable);
      if (victoryData.win) {
        setUserTable(victoryData.winTable);
        setWon(true);
      }
    }
  }, [userTable]);

  const handleClickCell = ({ target }) => {
    // Update 'on' property of target cell
    if (target.dataset.on === 'false' && target.dataset.won === 'false') {
      setUserTable((prevState) =>
        prevState.map((row) =>
          row.map((cell) =>
            cell.id === target.dataset.id ? { ...cell, on: true } : { ...cell }
          )
        )
      );
    }
  };

  const handleClickWon = () => {
    setWon(false);
  };

  const handleClickResetButton = () => {
    setReset((prevState) => !prevState);
    resetWinTable();
  };

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        {won && <BingoWon onClickWon={handleClickWon} />}
        <Col
          as="main"
          xs={12}
          md={{ offset: 1, span: 10 }}
          lg={{ offset: 2, span: 8 }}
          className="bingo-main"
        >
          {userTable && (
            <BingoTable>
              {userTable.map((row, index) => (
                <tr
                  key={index}
                  className="align-items-center justify-content-center"
                >
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
        </Col>
        <ResetButton onClickResetButton={handleClickResetButton} />
      </Row>
    </Container>
  );
}
