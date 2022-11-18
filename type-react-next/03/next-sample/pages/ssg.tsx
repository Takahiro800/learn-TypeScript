// 型のために導入
import type { GetStaticProps, NextPage } from 'next';

// Next.jsの組み込みコンポーネント
import Head from 'next/head';

// ページコンポーネントのpropsの型定義
type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
      </main>
    </div>
  );
};

// getStaticPropsはビルド時に実行される
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSG;
