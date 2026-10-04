import commentator1 from '../../../assets/images/commentator-1.jpg';
import commentator2 from '../../../assets/images/commentator-2.jpg';
import commentator3 from '../../../assets/images/commentator-3.jpg';
import styles from './ReviewsSection.module.css';

const REVIEWS = [
  {
    id: 1,
    name: 'Maria Tkachuk',
    testimonial:
      'I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!',
    photo: commentator1,
  },
  {
    id: 2,
    name: 'Sergey Rybachok',
    testimonial:
      'I had a great experience using this medical platform to access my health records. This platform is a game-changer for managing my healthcare needs.',
    photo: commentator2,
  },
  {
    id: 3,
    name: 'Natalia Chatuk',
    testimonial:
      'I recently had a virtual appointment with my doctor through this medical platform, and I was pleasantly surprised by how seamless the experience was.',
    photo: commentator3,
  },
] as const;

const ReviewList = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul
    className={styles.list}
    aria-hidden={ariaHidden || undefined}
  >
    {REVIEWS.map(({ id, name, testimonial, photo }) => (
      <li key={ariaHidden ? `dup-${id}` : id} className={styles.card}>
        <article className={styles.cardInner}>
          <div className={styles.avatar}>
            <img
              className={styles.avatarImage}
              src={photo}
              alt={ariaHidden ? '' : `Photo of ${name}`}
              width={64}
              height={64}
            />
          </div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.testimonial}>{testimonial}</p>
        </article>
      </li>
    ))}
  </ul>
);

const ReviewsSection = () => {
  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 className={styles.title} id="reviews-title">
            Reviews
          </h2>
          <p className={styles.subtitle}>
            Search for Medicine, Filter by your location
          </p>
        </header>

        <div className={styles.viewport} aria-label="Customer reviews">
          <div className={styles.track}>
            <ReviewList />
            <ReviewList ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
