import styles from "./WritingPage.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import WritingData from "../../data/writing.json";

import WritingBlurb from "./WritingBlurb/WritingBlurb";

export const WritingPage: React.FC = () => {
  const [subheading, setSubheading] = useState<string | null>(null);
  const [pageInfo, setPageInfo] = useState<{
    title: string;
    text: string;
  } | null>(null);

  useEffect(() => {
    switch (subheading) {
      case "scriptwriting":
        setPageInfo(WritingData.scriptwriting);
        break;
      case "fiction":
        setPageInfo(WritingData.ficton);
        break;
      case "stage":
        setPageInfo(WritingData.stage);
        break;
      case "journalism":
        setPageInfo(WritingData.journalism);
        break;
      case "non-fiction":
        setPageInfo(WritingData["non-fiction"]);
        break;
    }
  }),
    [subheading];

  const PageNameHandler = (e: any) => {
    e.PreventDefault;
    const pageRequested = e.target.id;
    setSubheading(pageRequested);
  };

  return (
    <div className={styles.writing}>
      <WritingBlurb />
      <div className={styles.writing__menu}>
        <div className={styles.writing__links}>
          <Link
            href="#info"
            className={styles.writing__menuItem}
            id="scriptwriting"
            onClick={PageNameHandler}
          >
            Scriptwriting<span className={styles.writing__titleStop}>.</span>
          </Link>
          <Link
            href="#info"
            className={styles.writing__menuItem}
            id="fiction"
            onClick={PageNameHandler}
          >
            Fiction<span className={styles.writing__titleStop}>.</span>
          </Link>
          <Link
            href="#info"
            className={styles.writing__menuItem}
            id="stage"
            onClick={PageNameHandler}
          >
            Stage<span className={styles.writing__titleStop}>.</span>
          </Link>
          <Link
            href="#info"
            className={styles.writing__menuItem}
            id="journalism"
            onClick={PageNameHandler}
          >
            Journalism<span className={styles.writing__titleStop}>.</span>
          </Link>
          <Link
            href="#info"
            className={styles.writing__menuItem}
            id="non-fiction"
            onClick={PageNameHandler}
          >
            Non-Fiction<span className={styles.writing__titleStop}>.</span>
          </Link>
        </div>
        <div id="info" className={styles.writing__info}>
          {pageInfo && (
            <>
              <h3 className={styles.writing__infoTitle}>{pageInfo.title}</h3>
              <hr />
              <p className={styles.writing__infoText}>{pageInfo.text}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WritingPage;
