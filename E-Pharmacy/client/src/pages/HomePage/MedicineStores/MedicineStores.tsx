import styles from './MedicineStores.module.css';

const SPRITE = '/assets/images/sprite/sprite.svg';

const STORES = [
  {
    id: 1,
    name: 'Huge Sale',
    street: 'Albenia G83',
    city: 'Seoul',
    phone: '717-24-2429',
    rating: 2,
    isOpen: true,
  },
  {
    id: 2,
    name: 'Tremblay and Schiller',
    street: 'Kretoria F45',
    city: 'Castlerea',
    phone: '595-08-2102',
    rating: 3,
    isOpen: true,
  },
  {
    id: 3,
    name: 'Fahey-Batz',
    street: 'Kretoria 11007',
    city: 'Champerico',
    phone: '506-84-9725',
    rating: 1,
    isOpen: false,
  },
  {
    id: 4,
    name: 'Baumbach LLC',
    street: 'Pretoria F11',
    city: 'Houxiang',
    phone: '132-90-3868',
    rating: 3,
    isOpen: true,
  },
  {
    id: 5,
    name: 'Howell Group',
    street: 'Porto 4785-103',
    city: 'Abelheira',
    phone: '279-16-6959',
    rating: 5,
    isOpen: false,
  },
  {
    id: 6,
    name: 'Williamson-Gerlach',
    street: 'Albaira 6233',
    city: 'Arrufó',
    phone: '792-44-1782',
    rating: 4,
    isOpen: true,
  },
] as const;

const MedicineStores = () => {
  return (
    <section className={styles.section} aria-labelledby="medicine-stores-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 className={styles.title} id="medicine-stores-title">
            Your Nearest Medicine Store
          </h2>
          <p className={styles.subtitle}>
            Search for Medicine, Filter by your location
          </p>
        </header>

        <ul className={styles.list}>
          {STORES.map(({ id, name, street, city, phone, rating, isOpen }) => (
            <li key={id} className={styles.card}>
              <article className={styles.cardInner}>
                <div className={styles.decor} aria-hidden="true">
                  <span className={`${styles.decorLine} ${styles.decorLine1}`} />
                  <span className={`${styles.decorLine} ${styles.decorLine2}`} />
                  <span className={`${styles.decorLine} ${styles.decorLine3}`} />
                </div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.storeName}>{name}</h3>
                  <div className={styles.meta}>
                    <p className={styles.rating}>
                      <svg
                        className={styles.iconStar}
                        width={16}
                        height={16}
                        aria-hidden="true"
                      >
                        <use href={`${SPRITE}#icon-star`} />
                      </svg>
                      <span className={styles.ratingValue}>{rating}</span>
                    </p>
                    <p
                      className={`${styles.status} ${
                        isOpen ? styles.statusOpen : styles.statusClose
                      }`}
                    >
                      {isOpen ? 'OPEN' : 'CLOSE'}
                    </p>
                  </div>
                </div>

                <address className={styles.address}>
                  <svg
                    className={styles.iconMap}
                    width={18}
                    height={18}
                    aria-hidden="true"
                  >
                    <use href={`${SPRITE}#icon-map`} />
                  </svg>
                  <span className={styles.addressText}>
                    <span className={styles.street}>{street}</span>
                    <span className={styles.city}>{city}</span>
                  </span>
                </address>

                <a
                  className={styles.phone}
                  href={`tel:${phone.replace(/-/g, '')}`}
                >
                  <svg
                    className={styles.iconPhone}
                    width={18}
                    height={18}
                    aria-hidden="true"
                  >
                    <use href={`${SPRITE}#icon-phone`} />
                  </svg>
                  <span>{phone}</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MedicineStores;
