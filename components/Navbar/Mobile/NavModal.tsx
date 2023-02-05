import styles from "./NavModal.module.scss";
import Link from "next/link";

interface IProps {
  modalHandler: () => void;
}

export const NavModal = ({ modalHandler }: IProps): JSX.Element => {
  return (
    <div className={styles.navModal}>
        <ul className={styles.navModal__links}>
          <li>
            <Link
              className={styles.navModal__link}
              href="/"
              onClick={modalHandler}
            >
              Home<span className={styles.navModal__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.navModal__link}
              href="/writing"
              onClick={modalHandler}
            >
              Writing<span className={styles.navModal__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.navModal__link}
              href="/performing"
              onClick={modalHandler}
            >
              Performing<span className={styles.navModal__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.navModal__link}
              href="/gallery"
              onClick={modalHandler}
            >
              Gallery<span className={styles.navModal__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.navModal__link}
              href="/events"
              onClick={modalHandler}
            >
              Events<span className={styles.navModal__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.navModal__link}
              href="/contact"
              onClick={modalHandler}
            >
              Contact<span className={styles.navModal__linkStop}>.</span>
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default NavModal;
