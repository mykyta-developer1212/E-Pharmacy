import clientImg from '../../../assets/images/client.jpg';
import styles from './PromoSection.module.css';

const SPRITE = '/assets/images/sprite/sprite.svg';

const FEATURES = [
  'Take user orders form online',
  'Create your shop profile',
  'Manage your store',
  'Get more orders',
  'Storage shed',
] as const;

const FeatureList = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul className={styles.features} aria-hidden={ariaHidden || undefined}>
    {FEATURES.map((label) => (
      <li key={label} className={styles.feature}>
        <svg
          className={styles.iconLightning}
          width={20}
          height={20}
          aria-hidden="true"
        >
          <use href={`${SPRITE}#icon-lightning`} />
        </svg>
        <span className={styles.featureText}>{label}</span>
      </li>
    ))}
  </ul>
);

const PromoSection = () => {
  return (
    <section className={styles.section} aria-labelledby="promo-section-title">
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="promo-section-title">
              Add the medicines you need online now
            </h2>
            <p className={styles.description}>
              Enjoy the convenience of having your prescriptions filled from
              home by connecting with your community pharmacy through our
              online platform.
            </p>
            <a className={styles.button} href="#">
              Buy medicine
            </a>
          </div>

          <div className={styles.media}>
            <img
              className={styles.image}
              src={clientImg}
              alt="Woman on a video call with a doctor while holding medication"
              width={661}
              height={524}
            />
          </div>
        </div>

        <div className={styles.ticker} aria-label="Platform features">
          <div className={styles.tickerTrack}>
            <FeatureList />
            <FeatureList ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
