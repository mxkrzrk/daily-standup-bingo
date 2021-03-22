import './BingoWon.css';
import { Fireworks } from 'fireworks/lib/react';

export default function BingoWon({ onClickWon }) {
  let dx = {
    y: 100,
    x: window.innerWidth / 2.4,
    count: 1,
    interval: 1000,
    colors: ['#A64170', '#F2B56B', '#BF5517', '#732002', '#0D0D0D'],
  };
  let sx = {
    y: 100,
    x: window.innerWidth / 1.8,
    count: 1,
    interval: 1000,
    colors: ['#A64170', '#F2B56B', '#BF5517', '#732002', '#0D0D0D'],
  };

  return (
    <div
      className="bingo-won d-flex justify-content-center align-items-center"
      onClick={onClickWon}
    >
      <Fireworks {...dx} />
      <Fireworks {...sx} />
      <h2 className="bingo-won-title">WOOOOW....Bingo!!!!</h2>
    </div>
  );
}
