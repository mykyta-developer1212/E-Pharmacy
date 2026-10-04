import styles from './PromoBanners.module.css';

const BANNERS = [
  {
    id: 1,
    title: 'Huge Sale',
    value: '70%',
    linkText: 'Shop now',
    href: '#',
  },
  {
    id: 2,
    title: 'Secure delivery',
    value: '100%',
    linkText: 'Read more',
    href: '#',
  },
  {
    id: 3,
    title: 'Off',
    value: '35%',
    linkText: 'Shop now',
    href: '#',
  },
] as const;

const PromoBanners = () => {
  return (
    <section className={styles.section} aria-label="Promotions">
      <div className={styles.container}>
        <ul className={styles.list}>
          {BANNERS.map(({ id, title, value, linkText, href }) => (
            <li key={id} className={styles.card}>
              <div className={styles.header}>
                <span className={styles.badge} aria-hidden="true">
                  {id}
                </span>
                <h2 className={styles.title}>{title}</h2>
              </div>
              <div className={styles.footer}>
                <p className={styles.value}>{value}</p>
                <a className={styles.link} href={href}>
                  {linkText}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PromoBanners;
