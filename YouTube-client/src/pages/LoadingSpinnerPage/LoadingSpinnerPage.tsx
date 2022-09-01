import styles from './LoadingSpinnerPage.module.scss';

export default function LoadingSpinnerPage() {
  return (
    <main className={`main ${styles.main}`}>
      <div className={styles.loader} />
    </main>
  );
}
