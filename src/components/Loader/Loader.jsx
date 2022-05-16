import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.loader}>
      <ThreeDots width="500" color="#ffa500" ariaLabel="loading" />
    </div>
  );
}
