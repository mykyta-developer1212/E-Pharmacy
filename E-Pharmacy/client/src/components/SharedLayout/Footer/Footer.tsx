import logoWhite from '../../../assets/images/logo-white.svg';
import styles from './Footer.module.css';

const SPRITE = '/assets/images/sprite/sprite.svg';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Medicine store', href: '/medicine-store' },
  { label: 'Medicine', href: '/medicine' },
] as const;

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: 'icon-facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: 'icon-instagram',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: 'icon-youtube',
  },
] as const;

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a className={styles.logo} href="/">
              <img
                className={styles.logoIcon}
                src={logoWhite}
                alt=""
                width={44}
                height={44}
              />
              <span className={styles.logoText}>E-Pharmacy</span>
            </a>
            <p className={styles.description}>
              Get the medicine to help you feel better, get back to your active
              life, and enjoy every moment.
            </p>
          </div>

          <div className={styles.links}>
            <nav className={styles.nav} aria-label="Footer navigation">
              <ul className={styles.navList}>
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a className={styles.navLink} href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className={styles.socialList}>
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <li key={icon}>
                  <a
                    className={styles.socialLink}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <svg
                      className={styles.socialIcon}
                      width={28}
                      height={28}
                      aria-hidden="true"
                    >
                      <use href={`${SPRITE}#${icon}`} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <ul className={styles.bottomList}>
            <li className={styles.bottomItem}>
              &copy; E-Pharmacy 2026. All Rights Reserved
            </li>
            <li className={styles.bottomItem}>
              <a className={styles.bottomLink} href="/privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li className={styles.bottomItem}>
              <a className={styles.bottomLink} href="/terms">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
