import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです</p>
        <p>{message}</p>
      </main>
      <footer>
        <div>
          <Link href="/">Go To HOME</Link>
        </div>
        <div>
          <Link href="/ssg">Go To SSG</Link>
        </div>
        <div>
          <Link href="/ssr">Go To SSR</Link>
        </div>
        <div>
          <Link href="/isr">Go To ISR</Link>
        </div>
      </footer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} にこのページのgetServerSidePropsが実行されました`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSR;
