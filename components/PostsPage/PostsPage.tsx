import styles from "./PostsPage.module.scss";
import { useContext } from "react";
import Link from "next/link";
import { WidthContext } from "../../pages/_app";

export const PostsPage: React.FC = () => {
  const width: number = useContext(WidthContext);
  return (
    <div className={styles.posts}>
      <div className={styles.posts__titleContainer}>
        <div className={styles["posts__title--desktop"]}>
          <h1 className={styles.posts__titleText}>
            Posts<span className={styles.posts__titleStop}>.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
