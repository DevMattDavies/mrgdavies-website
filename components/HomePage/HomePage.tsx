import styles from "./HomePage.module.scss";
import { useContext } from "react";
import Link from "next/link";
import { WidthContext } from "../../pages/_app";

export const HomePage: React.FC = () => {
  const width: number = useContext(WidthContext);
  return (
    <div className={styles.home}>
      <div className={width > 480 ? styles.home__welcomeContainer : ""}>
        <div className={width > 480 ? styles["home__welcome--desktop"] : ""}>
          <img
            className={styles.home__image}
            src="/assets/images/MD_1.jpg"
            alt="headshot photo"
          />
          <div className={styles.home__welcomeText}>
            <h2 className={styles.home__title}>
              Welcome<span className={styles.home__titleStop}>.</span>
            </h2>
            <p className={styles.home__bodyText}>
              If you’re looking for trouble, you’ve come to the wrong place.
              <br />
              <br />
              If you’re looking for trouble, I believe it has its own website,
              which I’m not prepared to advertise here as I don’t wish to be
              seen to be condoning poor behaviour.
              <br />
              <br /> Instead, this is t’Interweb home of Michael Davies. You can
              pretty much see what I do.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.home__news}>
        <h2 className={styles.home__subtitle}>Breaking News.</h2>
        <div className={styles.home__newsContainer}>
          <div className={styles.home__newsItem}>
            <h3 className={styles.home__newsTitle}>
              New novel set for May 2023 publication
            </h3>
            <hr />
            <h3 className={styles.home__newsDate}>July 19, 2022</h3>
            <p className={styles.home__newsContent}>
              Marking the centenary of Desmond Bagley’s birth (see Domino
              Island, below), publishers HarperCollins have commissioned a brand
              new novel featuring the same protagonist, Bill Kemp. Entitled
              Outback, it's due for publication in hardback and Kindle on May
              11, 2023...
              <br />
              <i>read more</i>
            </p>
          </div>
          <div className={styles.home__newsItem}>
            <h3 className={styles.home__newsTitle}>
              New novel set for May 2023 publication
            </h3>
            <hr />
            <h3 className={styles.home__newsDate}>July 19, 2022</h3>
            <p className={styles.home__newsContent}>
              Marking the centenary of Desmond Bagley’s birth (see Domino
              Island, below), publishers HarperCollins have commissioned a brand
              new novel featuring the same protagonist, Bill Kemp. Entitled
              Outback, it's due for publication in hardback and Kindle on May
              11, 2023...
              <br />
              <i>read more</i>
            </p>
          </div>
        </div>
        <div className={styles.home__readMore}>
          <Link className={styles.home__seeAllPosts} href="/posts">
            see all posts
          </Link>
          <img
            className={styles.home__arrow}
            src="/assets/arrow.svg"
            alt="arrow"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
