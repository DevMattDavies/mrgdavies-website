import styles from "./NavModal.module.scss";
import Link from "next/link";

export const NavModal: React.FC = () => {
  return (
    <div className={styles.navModal}>
      <ul className={styles.navModal__links}>
        <li>
          <Link className={styles.navModal__link} href="#">
            Home<span className={styles.navModal__linkStop}>.</span>
          </Link>
        </li>
        <li>
          <Link className={styles.navModal__link} href="#">
            Writing<span className={styles.navModal__linkStop}>.</span>
          </Link>
        </li>
        <li>
          <Link className={styles.navModal__link} href="#">
            Performing<span className={styles.navModal__linkStop}>.</span>
          </Link>
        </li>
        <li>
          <Link className={styles.navModal__link} href="#">
            Gallery<span className={styles.navModal__linkStop}>.</span>
          </Link>
        </li>
        <li>
          <Link className={styles.navModal__link} href="#">
            Events<span className={styles.navModal__linkStop}>.</span>
          </Link>
        </li>
        <li>
          <Link className={styles.navModal__link} href="#">
            Contact<span className={styles.navModal__linkStop}>.</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavModal;
