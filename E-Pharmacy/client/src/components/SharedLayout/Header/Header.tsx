import logoWhite from '../../../assets/images/logo-white.svg';
import logoGreen from '../../../assets/images/logo-green.svg';
import styles from './Header.module.css';

type HeaderProps = {
  variant: 'green' | 'white';
};

const Header = ({ variant }: HeaderProps) => {
  const logoSrc = variant === 'green' ? logoWhite : logoGreen;

  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <div className={styles.container}>
        <a className={styles.logo} href="/">
          <img
            className={styles.logoIcon}
            src={logoSrc}
            alt=""
            width={44}
            height={44}
          />
          <span className={styles.logoText}>E-Pharmacy</span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.menu}>
            <li className={`${styles.menuItem} ${styles.menuItemHome}`}>
              <a className={styles.menuLink} href="/">
                Home
              </a>
            </li>
            <li className={styles.menuConnector} aria-hidden="true" />
            <li className={`${styles.menuItem} ${styles.menuItemStore}`}>
              <a className={styles.menuLink} href="/medicine-store">
                Medicine store
              </a>
            </li>
            <li className={styles.menuConnector} aria-hidden="true" />
            <li className={`${styles.menuItem} ${styles.menuItemMedicine}`}>
              <a className={styles.menuLink} href="/medicine">
                Medicine
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a className={styles.register} href="/register">
            Register
          </a>
          <a className={styles.login} href="/login">
            Login
          </a>
        </div>

        <button className={styles.burger} type="button" aria-label="Open menu">
          <svg className={styles.burgerIcon} width={32} height={26}>
            <use href="/actions/sprite.svg#icon-burger" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
