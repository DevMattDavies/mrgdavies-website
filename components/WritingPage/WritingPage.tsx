import styles from "./WritingPage.module.scss";
import Link from "next/link";
import { useState } from "react";
import WritingData from "../../data/writing.json";

import WritingBlurb from "./WritingBlurb/WritingBlurb";

export const WritingPage: React.FC = () => {
  const [subheading, setSubheading] = useState<string | null>(null);
  const [pageInfo, setPageInfo] = useState<string | null>(null);

  interface writingProps {}

  const pageInfoHandler = () => {
    switch (subheading) {
      case "scriptwriting":
        setPageInfo(WritingData.scriptwriting.text);
        break;
      case "fiction":
        setPageInfo(WritingData.ficton.text);
      case "stage":
        setPageInfo(WritingData.stage.text);
      case "journalism":
        setPageInfo(WritingData.journalism.text);
      case "non-fiction":
        setPageInfo(WritingData["non-fiction"].text);
    }
  };

  const pageNameHandler = (e: any) => {
    e.PreventDefault();
    const pageRequested = e.target.id;
    setSubheading(pageRequested);
  };

  return (
    <div className={styles.writing}>
      <WritingBlurb />
      <div className={styles.writing__menu}>
        <Link
          href="/writing/scriptwriting"
          className={styles.writing__menuItem}
        >
          Scriptwriting<span className={styles.writing__titleStop}>.</span>
        </Link>
        <Link href="/writing/fiction" className={styles.writing__menuItem}>
          Fiction<span className={styles.writing__titleStop}>.</span>
        </Link>
        <Link href="/writing/stage" className={styles.writing__menuItem}>
          Stage<span className={styles.writing__titleStop}>.</span>
        </Link>
        <Link href="/writing/journalism" className={styles.writing__menuItem}>
          Journalism<span className={styles.writing__titleStop}>.</span>
        </Link>
        <Link href="/writing/non-fiction" className={styles.writing__menuItem}>
          Non-Fiction<span className={styles.writing__titleStop}>.</span>
        </Link>
      </div>
    </div>
  );
};

export default WritingPage;
