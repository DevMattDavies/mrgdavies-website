import styles from "./WritingPage.module.scss";
import Link from "next/link";
import { useState } from "react";
import { GetStaticProps, NextPage } from "next";

import WritingData from "../../public/data/writing.json";
import WritingBlurb from "./WritingBlurb/WritingBlurb";
import { TWritingData } from "../../types/writingData";

export const WritingPage: NextPage<TWritingData> = ({ writingData }) => {
  // create state to render specific data from writingData prop
  const [pageInfo, setPageInfo] = useState<{
    title: string;
    text: string;
  } | null>(null);

  // onClick handler to set state to correct data
  const pageNameHandler = (e: any): void => {
    e.PreventDefault;
    // get target id
    const pageRequested = e.target.id;
    // update pageInfo state based on id
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
            href="/writing/scriptwriting"
            className={styles.writing__menuItem}
            id="scriptwriting"
            onClick={pageNameHandler}
          >
            Scriptwriting<span className={styles.writing__titleStop}>.</span>
          </Link>
          <Link
            href="#info"
            className={styles.writing__menuItem}
            id="fiction"
            onClick={pageNameHandler}
          >
            Fiction<span className={styles.writing__titleStop}>.</span>
          </Link>
          <Link
            href="#info"
            className={styles.writing__menuItem}
            id="stage"
            onClick={pageNameHandler}
          >
            Stage<span className={styles.writing__titleStop}>.</span>
          </Link>
          <Link
            href="#info"
            className={styles.writing__menuItem}
            id="journalism"
            onClick={pageNameHandler}
          >
            Journalism<span className={styles.writing__titleStop}>.</span>
          </Link>
          <Link
            href="#info"
            className={styles.writing__menuItem}
            id="nonfiction"
            onClick={pageNameHandler}
          >
            Non-Fiction<span className={styles.writing__titleStop}>.</span>
          </Link>
        </div>
        <div className={styles.writing__info}>
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

export const getStaticProps: GetStaticProps = async () => {
  // assign WritingData to variable
  const writingData = WritingData;
  //   return variable as prop (must match type/interface so it can be destructured correctly)
  return {
    props: {
      writingData,
    },
  };
};
