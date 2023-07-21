import styles from './header.module.scss';
import { IHeader } from '../../types/types';

export const Header = (props: IHeader) => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href='/'>Home</a>
          <h1>{props.pageName}</h1>
          <a href='/about'>About us</a>
        </nav>
      </header>
    </>
  );
};