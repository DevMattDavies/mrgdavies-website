import styles from "./NavIcons.module.scss";
import Link from "next/link";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import FeedIcon from "@mui/icons-material/Feed";

export const NavIcons = (): JSX.Element => {
  return (
    <div className={styles.icons}>
      <div className={styles.icons__container}>
        <AlternateEmailIcon
          className={styles.icons__iconStyle}
          fontSize="small"
        />
        <Link
          className={styles.icons__text}
          href="mailto:mrgdavies@aol.com"
        >
          Email
        </Link>
      </div>
      <div className={styles.icons__container}>
        <TwitterIcon className={styles.icons__iconStyle} fontSize="small" />
        <Link
          className={styles.icons__text}
          href="https://twitter.com/mrgdavies"
          target="_blank"
        >
          Twitter
        </Link>
      </div>
    </div>
  );
};

export default NavIcons;
