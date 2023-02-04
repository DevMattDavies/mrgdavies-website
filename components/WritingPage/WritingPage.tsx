import styles from "./WritingPage.module.scss";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import WritingBlurb from "./WritingBlurb/WritingBlurb";

import { TWritingData } from "../../types/writingData";

export const WritingPage: React.FC<TWritingData> = ({ writingData }) => {
  const [pageInfo, setPageInfo] = useState<{
    title: string;
    text: string;
  } | null>(null);

  const PageNameHandler = (e: any) => {
    e.PreventDefault;
    const pageRequested = e.target.id;
    if (pageRequested === "scriptwriting") {
      setPageInfo(writingData.scriptwriting);
    } else if (pageRequested === "fiction") {
      setPageInfo(writingData.fiction);
    } else if (pageRequested === "stage") {
      setPageInfo(writingData.stage);
    } else if (pageRequested === "journalism") {
      setPageInfo(writingData.journalism);
    } else {
      setPageInfo(writingData.nonfiction);
    }
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
            id="nonfiction"
            onClick={PageNameHandler}
          >
            Non-Fiction<span className={styles.writing__titleStop}>.</span>
          </Link>
        </div>
        <div id="info" className={styles.writing__info}>
          {pageInfo && (
            <>
              <h3 className={styles.writing__infoTitle}>
                {pageInfo.title}
                <span className={styles.writing__titleStop}>.</span>
              </h3>
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
