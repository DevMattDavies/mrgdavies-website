import styles from "./Footer.module.scss";
import Link from "next/link";
import NavIcons from "../Navbar/NavIcons/NavIcons";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__containerOuter}>
        <div className={styles.footer__containerTitle}>
          <div className={styles.footer__title}>
            <h1 className={styles.footer__titleTop}>Michael</h1>
            <h1 className={styles.footer__titleBottom}>Davies</h1>
          </div>
          <p className={styles.footer__copyright}>
            Copyright &copy; {new Date().getFullYear()}
            {` Michael Davies - All Rights Reserved`}
          </p>
        </div>
        <div className={styles.footer__containerLeft}>
          <h3 className={styles.footer__text}>Navigation</h3>
          <Link className={styles.footer__link} href="/">
            Home
          </Link>
          <Link className={styles.footer__link} href="/writing">
            Writing
          </Link>
          <Link className={styles.footer__link} href="/performing">
            Performing
          </Link>
          <Link className={styles.footer__link} href="/gallery">
            Gallery
          </Link>
          <Link className={styles.footer__link} href="/events">
            Events
          </Link>
          <Link className={styles.footer__link} href="/contact">
            Contact
          </Link>
        </div>
        <div className={styles.footer__containerMid}>
          <h3 className={styles.footer__text}>Get in touch</h3>
          <NavIcons />
        </div>
        <div className={styles.footer__containerRight}>
          <h3 className={styles.footer__text}>Subscribe</h3>
          <form className={styles.footer__newsletter}>
            <input
              className={styles.footer__newsletterInput}
              type="email"
              placeholder="enter email"
            />
            <input
              className={styles.footer__newsletterButton}
              type="submit"
              value="Sign up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
