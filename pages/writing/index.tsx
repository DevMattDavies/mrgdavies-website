import type { NextPage, GetServerSideProps, GetStaticProps } from "next";
import WritingPage from "../../components/WritingPage/WritingPage";
import WritingData from "../../public/data/writing.json";

import { TWritingData } from "../../types/writingData";

const Writing: NextPage<TWritingData> = ({ writingData }) => {
  return <WritingPage writingData={writingData} />;
};

export default Writing;

export const getStaticProps: GetStaticProps = async () => {
  const writingData = WritingData;
  return {
    props: {
      writingData,
    },
  };
};
