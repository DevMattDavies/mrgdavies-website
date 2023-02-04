import styles from "./SocialLinks.module.scss";
import FeedIcon from "@mui/icons-material/Feed";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { useState } from "react";

export const SocialLinks: React.FC = () => {
  const [isNewsHovered, setIsNewsHovered] = useState<boolean>(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState<boolean>(false);

  const newsHoverOn = () => {
    setIsNewsHovered(true);
  };

  const newsHoverOff = () => {
    setIsNewsHovered(false);
  };

  const twitterHoverOn = () => {
    setIsTwitterHovered(true);
  };

  const twitterHoverOff = () => {
    setIsTwitterHovered(false);
  };

  console.log(isNewsHovered);

  return (
    <div className={styles.links}>
      <div className={styles.links__newsContainer}>
        <Link href="#">
          <p
            className={
              isNewsHovered ? styles["links__tag--hover"] : styles.links__tag
            }
            onMouseEnter={newsHoverOn}
            onMouseLeave={newsHoverOff}
          >
            sign up
          </p>
        </Link>
        <hr className={styles.links__hr} />
        <Link
          className={styles.links__newsIcon}
          href="#"
          onMouseEnter={newsHoverOn}
          onMouseLeave={newsHoverOff}
        >
          <FeedIcon
            fontSize="large"
            style={isNewsHovered ? { color: "#c72626" } : { color: "black" }}
          />
        </Link>
      </div>
      <div className={styles.links__twitterContainer}>
        <Link href="https://twitter.com/mrgdavies" target="_blank">
          <p
            className={
              isTwitterHovered ? styles["links__tag--hover"] : styles.links__tag
            }
            onMouseEnter={twitterHoverOn}
            onMouseLeave={twitterHoverOff}
          >
            twitter
          </p>
        </Link>
        <hr className={styles.links__hr} />
        <Link
          className={styles.links__twitterIcon}
          href="https://twitter.com/mrgdavies"
          target="_blank"
          onMouseEnter={twitterHoverOn}
          onMouseLeave={twitterHoverOff}
        >
          <TwitterIcon
            fontSize="large"
            style={isTwitterHovered ? { color: "#c72626" } : { color: "black" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
