import styles from "./WritingBlurb.module.scss";

export const WritingBlurb = (): JSX.Element => {
  return (
    <div className={styles.writing__titleContainer}>
      <div className={styles["writing__title--desktop"]}>
        <h1 className={styles.writing__titleText}>
          Writing<span className={styles.writing__titleStop}>.</span>
        </h1>
        <p className={styles.writing__bodyText}>
          Since he abandoned a promising career as a newspaper editor, Michael’s
          writing has appeared on stage, screen, radio, the printed page and
          online. <br />
          <br />
          His debut play Rasputin’s Mother won what is now the Bristol Old Vic
          playwriting competition and subsequent work for the stage includes the
          comedies Reality (Royal & Derngate, Northampton) and This American
          Carnage. He has also written narrative non-fiction for worldwide
          television (Netflix no.1), had short stories and poetry commissioned
          and published, and contributes regular essays for theatre programmes.{" "}
          <br />
          <br />
          Michael wrote the book and lyrics for Tess – The Musical, an
          adaptation of Thomas Hardy’s classic Tess of the d’Urbervilles (The
          Other Place, Stratford-upon-Avon), and completed Desmond Bagley’s
          thriller Domino Island for posthumous publication. Outback, the first
          novel he can call all his own, is published by HarperCollins.
        </p>
      </div>
    </div>
  );
};

export default WritingBlurb;
