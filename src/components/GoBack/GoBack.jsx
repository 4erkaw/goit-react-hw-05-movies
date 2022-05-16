import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import s from './GoBack.module.css';

export default function GoBack({ path }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(path)} className={s.backBtn}>
      <BiArrowBack className={s.arrow} />
    </button>
  );
}
