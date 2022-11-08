import styles from "./NavIcons.module.scss";
import Link from "next/link";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import FeedIcon from "@mui/icons-material/Feed";

export const NavIcons: React.FC = () => {
  return (
    <div className={styles.iconContainer}>
      <Link
        className={styles.iconContainer__icon}
        href="mailto:mrgdavies@aol.com"
      >
        <AlternateEmailIcon fontSize="large" />
      </Link>
      <Link
        className={styles.iconContainer__icon}
        href="https://twitter.com/mrgdavies"
        target="_blank"
      >
        <TwitterIcon fontSize="large" />
      </Link>
      <Link
        className={styles.iconContainer__icon}
        href="https://twitter.com/mrgdavies"
        target="_blank"
      >
        <FeedIcon fontSize="large" />
      </Link>
    </div>
  );
};

export default NavIcons;
