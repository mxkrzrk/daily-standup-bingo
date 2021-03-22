import './ResetButton.css';
import Button from 'react-bootstrap/Button';

export default function ResetButton({ onClickResetButton }) {
  return (
    <Button className="bingo-button" onClick={onClickResetButton}>
      Reset game
    </Button>
  );
}
