import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="bingo-header d-flex justify-content-center align-items-center shadow">
      <FontAwesomeIcon icon={faBorderAll} className="bingo-header-icon" />
      <h1 className="bingo-header-title">Daily Standup Bingo!</h1>
    </header>
  );
}
