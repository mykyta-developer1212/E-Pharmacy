import tablets from '../../../assets/images/tablets.png';
import styles from './MainBanner.module.css';

const MainBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.stage}>
          <img
            className={styles.image}
            src={tablets}
            alt=""
            width={749}
            height={508}
          />
          <div className={styles.copy}>
            <h1 className={styles.title}>
              Your medication
              <br />
              delivered
            </h1>
            <p className={styles.subtitle}>
              Say goodbye to all your
              <br />
              healthcare worries with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
