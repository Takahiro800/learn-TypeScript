import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

type ISRProps = {
  message: string;
};

// ISRPropsを受け付けるNextPageの型
const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってアクセス時にサーバーで描画されたページです</p>
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

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にこのページのgetStaticPropsが実行されました`;

  return {
    props: {
      message,
    },
    // ページの有効期限を秒単位で指定
    revalidate: 60,
  };
};

export default ISR;
