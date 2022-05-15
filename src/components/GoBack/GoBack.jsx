import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import s from './GoBack.module.css';

export default function GoBack({ page }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={s.backBtn}>
      <BiArrowBack className={s.arrow} />
    </button>
  );
}
