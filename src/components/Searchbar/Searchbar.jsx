import { useState } from 'react';
import s from './Searchbar.module.css';
import { FiSearch } from 'react-icons/fi';
import { Notify } from 'notiflix';

export default function Searchbar({ saveSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return Notify.info('Enter keyword!');
    }
    saveSubmit(query.toLowerCase());
    setQuery('');
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <button type="submit" className={s.button}>
          <FiSearch size="24" />
          <span className={s.label}></span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Find your movie"
          value={query}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
