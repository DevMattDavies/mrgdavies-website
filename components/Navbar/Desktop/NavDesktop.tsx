import styles from "./NavDesktop.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";

import NavIcons from "../NavIcons/NavIcons";

export const NavDesktop: React.FC = () => {
  const width: number = useContext(WidthContext);
  return (
    <div className={styles.nav}>
      <div className={styles.nav__title}>
        <h1 className={styles.nav__titleTop}>Michael</h1>
        <h1 className={styles.nav__titleBottom}>Davies</h1>
      </div>
      <div className={styles.nav__iconsContainer}>
        <NavIcons />
      </div>
      <div>
        <ul className={styles.nav__links}>
          <li>
            <Link className={styles.nav__link} href="#">
              Home<span className={styles.nav__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href="#">
              Writing<span className={styles.nav__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href="#">
              Performing<span className={styles.nav__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href="#">
              Gallery<span className={styles.nav__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href="#">
              Events<span className={styles.nav__linkStop}>.</span>
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href="#">
              Contact<span className={styles.nav__linkStop}>.</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDesktop;
