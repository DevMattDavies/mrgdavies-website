import styles from "./NavDesktop.module.scss";
import Link from "next/link";
import { useContext, useState } from "react";
import { WidthContext } from "../../../pages/_app";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import NavIcons from "../NavIcons/NavIcons";

export const NavDesktop: React.FC = () => {
  const width: number = useContext(WidthContext);
  const [isWritingHovered, setIsWritingHovered] = useState<boolean>(false);
  const [isPerformingHovered, setIsPerformingHovered] =
    useState<boolean>(false);

  const writingHoverHandler = (): void => {
    setIsWritingHovered((prevIsWritingHovered) => !prevIsWritingHovered);
  };

  const performingHoverHandler = (): void => {
    setIsPerformingHovered(
      (prevIsPerformingHovered) => !prevIsPerformingHovered
    );
  };

  return (
    <div className={styles.nav}>
      <div className={styles.nav__title}>
        <h1 className={styles.nav__titleTop}>Michael</h1>
        <h1 className={styles.nav__titleBottom}>Davies</h1>
      </div>
      <div>
        <ul className={styles.nav__links}>
          <li>
            <Link className={styles.nav__link} href="/">
              Home<span className={styles.nav__linkStop}>.</span>
            </Link>
          </li>
          <li className={styles.nav__linkContainer}>
            <Link
              className={styles.nav__link}
              href="/writing"
              onMouseEnter={writingHoverHandler}
              onMouseLeave={writingHoverHandler}
              style={
                isWritingHovered ? { color: "#B3002D" } : { color: "#000000" }
              }
            >
              Writing<span className={styles.nav__linkStop}>.</span>
            </Link>
            {isBrowser && isWritingHovered && (
              <div
                className={styles.nav__dropdown}
                onMouseEnter={writingHoverHandler}
                onMouseLeave={writingHoverHandler}
              >
                <Link
                  className={styles.nav__droplink}
                  href="/writing/scriptwriting"
                >
                  Scriptwriting
                </Link>
                <Link className={styles.nav__droplink} href="#">
                  Fiction
                </Link>
                <Link className={styles.nav__droplink} href="#">
                  Theatre Criticism
                </Link>
                <Link className={styles.nav__droplink} href="#">
                  Journalism
                </Link>
                <Link className={styles.nav__droplink} href="#">
                  National Playwriting Award
                </Link>
              </div>
            )}
          </li>
          <li className={styles.nav__linkContainer}>
            <Link
              className={styles.nav__link}
              href="/performing"
              onMouseEnter={performingHoverHandler}
              onMouseLeave={performingHoverHandler}
              style={
                isPerformingHovered
                  ? { color: "#B3002D" }
                  : { color: "#000000" }
              }
            >
              Performing<span className={styles.nav__linkStop}>.</span>
            </Link>
            {isBrowser && isPerformingHovered && (
              <div
                className={styles.nav__dropdown}
                onMouseEnter={performingHoverHandler}
                onMouseLeave={performingHoverHandler}
              >
                <Link
                  className={styles.nav__droplink}
                  href="/performing/roleplaying"
                >
                  Roleplaying
                </Link>
                <Link
                  className={styles.nav__droplink}
                  href="/performing/acting"
                >
                  Acting
                </Link>
                <Link
                  className={styles.nav__droplink}
                  href="/performing/voiceover"
                >
                  Voiceover
                </Link>
                <Link
                  className={styles.nav__droplink}
                  href="/performing/presenting"
                >
                  Presenting
                </Link>
                <Link
                  className={styles.nav__droplink}
                  href="/performing/public-speaking-lecturing"
                >
                  {`Public Speaking & Lecturing`}
                </Link>
                <Link className={styles.nav__droplink} href="/performing/music">
                  Music
                </Link>
              </div>
            )}
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
