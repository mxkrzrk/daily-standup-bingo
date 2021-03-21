import { useEffect, useState } from 'react';
import { bingoData } from './data/bingoData';
import shuffleArray from './utils/shuffleArray';
import checkVictory from './utils/checkVictory';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import BingoTable from './components/BingoTable/BingoTable';
import BingoCell from './components/BingoCell/BingoCell';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './components/Header/Header';
import Col from 'react-bootstrap/Col';

export default function App() {
  const [userTable, setUserTable] = useState();

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
  }, []);

  // Check the user victory
  useEffect(() => {
    if (userTable) {
      const victoryData = checkVictory(userTable);
      if (victoryData.win) {
        setUserTable(victoryData.winTable);
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

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
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
      </Row>
    </Container>
  );
}
